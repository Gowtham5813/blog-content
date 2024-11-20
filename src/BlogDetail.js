import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = ({ blogs }) => {
  const { id } = useParams(); // Extract blog ID from URL
  const blog = blogs.find((b) => b.id === parseInt(id, 10)); // Find the matching blog

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="blog-detail">
      <Link to="/" className="back-button">← Back to Home</Link>
      <div className="detail-container">
        {/* Left Side: Image Carousel */}
        <div className="image-container">
          {blog.blogImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="detail-image"
            />
          ))}
        </div>

        {/* Right Side: Blog Content */}
        <div className="content-container">
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-category">📍 {blog.location}</p>
          <p className="blog-description">{blog.description}</p>
          <p className="blog-main-description">{blog.mainDescription}</p>
          <p className="blog-tip">
            <strong>Tip:</strong> {blog.tip || "Explore the hidden gems!"}
          </p>
          <div className="author-section">
            <img
              src={blog.authorImage}
              alt={blog.authorName || "Author"}
              className="author-pic"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Author.png";
              }}
            />
            <p><strong>Author:</strong> {blog.authorName}</p>
          </div>
        </div>
      </div>

      {/* Additional Section: Highlights */}
      <div className="highlights-section">
        <h2>Highlights</h2>
        <ul>
          {blog.highlights?.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          )) || <p>No highlights available.</p>}
        </ul>
      </div>

      {/* Additional Section: Related Blogs */}
      <div className="related-blogs">
        <h2>Related Blogs</h2>
        <div className="related-grid">
          {blog.relatedBlogs?.map((related, index) => (
            <Link to={`/blog/${related.id}`} key={index} className="related-card">
             
              <h3>{related.title}</h3>
              <img
                src={related.image}
                alt={related.title}
                className="related-image"
              />
            
            </Link>
          )) || <p>No related blogs found.</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
