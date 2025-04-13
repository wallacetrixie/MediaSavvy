import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaDownload, FaTimes } from "react-icons/fa";
import "./styles/Search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchInput.trim()) {
      setResults([]);
      setError("");
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchResults(searchInput);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  const fetchResults = async (query) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get("http://localhost:5000/search", {
        params: { query },
      });

      setResults(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong while searching."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsDownloading(false);
  };

  const handleDownload = async (type) => {
    setIsDownloading(true);
    try {
      // Optional: trigger a toast here like "Download started..."
      const link = document.createElement("a");
      link.href = `http://localhost:5000/download/${selectedVideo.id}?type=${type}`;
      link.target = "_blank";
      link.click();
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="searchbar-wrapper">
      {/* Search Bar */}
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search music or video..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Feedback UI */}
      {isLoading && <div className="loading-text">Searching...</div>}
      {!isLoading && error && <div className="error-message">{error}</div>}
      {!isLoading && searchInput && results.length === 0 && !error && (
        <div className="no-results">No matches found</div>
      )}

      {/* Results Dropdown */}
      {!isLoading && results.length > 0 && (
        <div className="dropdown">
          {results.map((result) => (
            <div className="dropdown-item" key={result.id}>
              <img src={result.thumbnail} alt={result.title} />
              <div className="info">
                <strong>{result.title}</strong>
                <span>{result.channelTitle}</span>
              </div>
              <button
                className="download-btn"
                onClick={() => handleDownloadClick(result)}
              >
                <FaDownload />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal Preview */}
      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <FaTimes className="close-icon" onClick={closeModal} />
            <h2>{selectedVideo.title}</h2>
            <iframe
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="btn-group">
              <button onClick={() => handleDownload("mp3")} disabled={isDownloading}>
                {isDownloading ? "Downloading MP3..." : "Download MP3"}
              </button>
              <button onClick={() => handleDownload("mp4")} disabled={isDownloading}>
                {isDownloading ? "Downloading MP4..." : "Download MP4"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
