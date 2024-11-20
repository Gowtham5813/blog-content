import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogWriterInput.css";

const BlogWriterInput = ({addBlog}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    authorName: "",
    authorImage: null,
    blogImages: [],
    mainDescription: "",
    headings: "",
    subHeadings: "",
    multimedia: null,
  });

    const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
      const { name, files } = e.target;
      
      if (name==="blogImages") {
          const fileNames = Array.from(files).map((file) => URL.createObjectURL(file)); 
          setFormData({
              ...formData,
              [name]: fileNames,
          });
      }
      else if(name==="authorImage"){
          setFormData({
              ...formData,
              [name]: URL.createObjectURL(files[0]),
          });
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Author Image URL:", formData.authorImage);
      addBlog({
          id: Date.now(),
          ...formData,
      });

      navigate("/");
    // You can send this data to your backend API here
  };

  return (
    <div className="blog-writer">
      <h2>Create a New Blog</h2>
      <form className="blog-form" onSubmit={handleSubmit}>
        {/* Blog Title */}
        <div className="form-group">
          <label htmlFor="title">Blog Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter the blog title"
            required
          />
        </div>

        {/* Single Line Description */}
        <div className="form-group">
          <label htmlFor="description">Single Line Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Briefly describe the blog"
            required
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter the location"
            required
          />
        </div>

        {/* Author Details */}
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleInputChange}
            placeholder="Author's Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorImage">Author Image:</label>
          <input
            type="file"
            id="authorImage"
            name="authorImage"
            onChange={handleFileChange}
            accept="image/png"
            required
          />
        </div>

        {/* Blog Images */}
        <div className="form-group">
          <label htmlFor="blogImages">Blog Images:</label>
          <input
            type="file"
            id="blogImages"
            name="blogImages"
            onChange={handleFileChange}
            accept="image/png"
            multiple
            required
          />
        </div>

        {/* Main Description */}
        <div className="form-group">
          <label htmlFor="mainDescription">Main Description:</label>
          <textarea
            id="mainDescription"
            name="mainDescription"
            value={formData.mainDescription}
            onChange={handleInputChange}
            placeholder="Write the main content of the blog"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Headings */}
        <div className="form-group">
          <label htmlFor="headings">Headings:</label>
          <input
            type="text"
            id="headings"
            name="headings"
            value={formData.headings}
            onChange={handleInputChange}
            placeholder="Enter the headings"
          />
        </div>

        {/* Sub-Headings */}
        <div className="form-group">
          <label htmlFor="subHeadings">Sub-Headings:</label>
          <input
            type="text"
            id="subHeadings"
            name="subHeadings"
            value={formData.subHeadings}
            onChange={handleInputChange}
            placeholder="Enter the sub-headings"
          />
        </div>

        {/* Multimedia */}
        <div className="form-group">
          <label htmlFor="multimedia">Add Multimedia:</label>
          <input
            type="file"
            id="multimedia"
            name="multimedia"
            onChange={handleFileChange}
            accept="image/*,video/*,audio/*"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogWriterInput;
