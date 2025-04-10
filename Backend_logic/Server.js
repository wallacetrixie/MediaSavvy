const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

app.use(cors());

// Middleware to check if API key exists
app.use((req, res, next) => {
  if (!YOUTUBE_API_KEY) {
    return res.status(500).json({ error: "YouTube API key is missing or invalid." });
  }
  next();
});

app.get("/search", async (req, res) => {
  const { query } = req.query;

  // Validate query input
  if (!query || typeof query !== "string" || query.trim().length < 2) {
    return res.status(400).json({ error: "Please enter a more descriptive search query." });
  }

  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 10,
        key: YOUTUBE_API_KEY,
      },
    });

    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ message: "No videos found for your search." });
    }

    const results = response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));

    res.status(200).json(results);
  } catch (error) {
    console.error("YouTube API error:", error.message);

    // Axios-specific feedback
    if (error.response) {
      return res.status(error.response.status).json({
        error: "YouTube API returned an error.",
        details: error.response.data.error?.message || "Unknown error",
      });
    } else if (error.request) {
      return res.status(503).json({
        error: "No response from YouTube API. Please check your internet connection.",
      });
    } else {
      return res.status(500).json({
        error: "Something went wrong while making the request.",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
