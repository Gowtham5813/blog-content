import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./BlogHome.css";

const BlogHome = ({ blogs }) => {
  const [likedBlogs, setLikedBlogs] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const userInput = e.target.value;
    setSearchTerm(userInput);

    // Filter blogs based on the input text
    if (userInput) {
      const filtered = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(userInput.toLowerCase()) ||
          blog.location.toLowerCase().includes(userInput.toLowerCase()) ||
          blog.authorName.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title); // Set the clicked suggestion as the search term
    setFilteredSuggestions([]); // Clear suggestions
  };

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLikeClick = (id) => {
    setLikedBlogs((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // Toggle the like status for the specific blog
    }));
  };

  const handleShareClick = (blogId) => {
    const blogURL = `${window.location.origin}/blog/${blogId}`;
    navigator.clipboard
      .writeText(blogURL)
      .then(() => alert("Blog link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy link:", err));
  };
  

  return (
    <div className="blog-home">
      <button className="hamburger-menu" onClick={toggleSidebar}>
        {isSidebarOpen ? "✖" : "☰"}
      </button>
      {/* Side Menu */}
      <aside className={`side-menu ${isSidebarOpen ? "open" : ""}`}>
      
      <ul>
          <li><span class="material-icons">chat_bubble_outline</span> Chats</li>
          <li><span class="material-icons">notifications</span> Notifications</li>
          <li><span class="material-icons">favorite</span> Likes</li>
          <li><span class="material-icons">event</span> Up Next</li>
          <li><span class="material-icons">travel_explore</span> Explore</li>
      
          <li
            className="plus-icon"
            onClick={() => navigate("/create-blog")} // Navigate to BlogWriterInput page
          >
            <span class="material-icons">post_add</span> Add Blog
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1>Explore</h1>
        <div className="filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Itineraries</button>
          <button className="filter-button">Lists</button>
        </div>
        <div className="search-container">
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search for locations or by user..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <div className="suggestion-title">{suggestion.title}</div>
              <div className="suggestion-location">{suggestion.location}</div>
            </li>
          ))}
        </ul>
      )}
    </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card-link">
              <div className="blog-card">
                <div className="blog-image-container">
                  <img src={blog.blogImages[0]} alt={blog.title} className="blog-image" />
                  <div className="overlay">
                    {/* Places Count */}
                    <span className="places-count">{blog.places} places</span>
                    {/* Like Button */}
                    <button
  className="like-button"
  onClick={(e) => {
    e.preventDefault(); // Prevent Link from triggering on click
    handleLikeClick(blog.id);
  }}
>
  {likedBlogs[blog.id] ? "❤️" : "🤍"}
</button>
                  </div>
                </div>
                <div className="blog-details">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-location">
                    <img
                      src="location-icon.png"
                      alt="Location Icon"
                      className="location-icon"
                    />
                    {blog.location}
                  </p>
                  <div className="blog-author">
                    <img
                      src={blog.authorImage}
                      alt={blog.authorName || "Author"}
                      className="author-pic"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "Author.png";
                      }}
                    />
                    <span>{blog.authorName}</span>
                  </div>
                </div>
                    <button
              className="share-button"
              onClick={(e) => {
                e.preventDefault();
                handleShareClick(blog.id);
              }}
            >
              🔗
            </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
