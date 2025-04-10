import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaDownload } from "react-icons/fa";
import "./styles/Search.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchInput.trim()) {
      setResults([]);
      setError("");
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetchResults(searchInput);
    }, 500); // debounce to avoid too many API hits

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

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search music or video..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      {isLoading && <div className="loading-text">Searching...</div>}

      {!isLoading && error && (
        <div className="error-message">{error}</div>
      )}

      {!isLoading && results.length > 0 && (
        <div className="dropdown">
          {results.map((result) => (
            <div className="dropdown-item" key={result.id}>
              <img src={result.thumbnail} alt={result.title} />
              <div className="info">
                <strong>{result.title}</strong>
                <span>{result.channelTitle}</span>
              </div>
              <button className="download-btn">
                <FaDownload />
              </button>
            </div>
          ))}
        </div>
      )}

      {!isLoading && searchInput && results.length === 0 && !error && (
        <div className="no-results">No matches found</div>
      )}
    </div>
  );
};

export default SearchBar;
