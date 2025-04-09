import React, { useState, useEffect } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
import "./styles/Search.css";

const mockResults = [
  {
    id: 1,
    title: "Blinding Lights - The Weeknd",
    duration: "3:22",
    type: "Music",
  },
  {
    id: 2,
    title: "Calm Piano Mix - Relaxing Music",
    duration: "1:05:12",
    type: "Music",
  },
  {
    id: 3,
    title: "Epic Workout Video - Motivation",
    duration: "5:48",
    type: "Video",
  },
  {
    id: 4,
    title: "Africa Top Hits 2023",
    duration: "2:44",
    type: "Music",
  },
];

const SearchBar = ({ visible }) => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchInput.length === 0) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      const filtered = mockResults.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  if (!visible) return null;

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search music or video..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {isLoading && <div className="loading-text">Searching...</div>}
      {!isLoading && results.length > 0 && (
        <div className="dropdown">
          {results.map((result) => (
            <div className="dropdown-item" key={result.id}>
              <div className="info">
                <strong>{result.title}</strong>
                <span>{result.duration}</span>
              </div>
              <button className="download-btn">
                <FaDownload />
              </button>
            </div>
          ))}
        </div>
      )}
      {!isLoading && searchInput && results.length === 0 && (
        <div className="no-results">No matches found</div>
      )}
    </div>
  );
};

export default SearchBar;
