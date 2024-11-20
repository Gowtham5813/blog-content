import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogWriterInput from "./BlogWriterInput";
import BlogHome from "./BlogHome";
import BlogDetail from "./BlogDetail";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Explore Park Slope",
      location: "Brooklyn, NY",
      authorName: "John Doe",
      authorImage: "park-slope.jppg",
      blogImages: ["park-slope.jpg", "park-slope.jpg", "park-slope.jpg"],
      description: "Discover the charm of Park Slope with its historic buildings and vibrant culture.",
      places: 5,
    },
    {
      id: 2,
      title: "Grand Canyon Adventure",
      location: "Arizona, USA",
      authorName: "Jane Smith",
      authorImage: "/author2.png",
      blogImages: ["grand-canyan.jpg", "grand-canyan.jpg"],
      description: "Experience the grandeur of the Grand Canyon with stunning views and adventurous trails.",
      places: 7,
    },
    {
      id: 3,
      title: "Alpine Beauty",
      location: "Swiss Alps",
      authorName: "Emma Brown",
      authorImage: "/author3.png",
      blogImages: ["alpine.jpg", "alpine.jpg"],
      description: "Explore the breathtaking Swiss Alps with picturesque villages and majestic peaks.",
      places: 6,
    },
    {
      id: 4,
      title: "Discover Kyoto",
      location: "Kyoto, Japan",
      authorName: "Akira Takahashi",
      authorImage: "/author4.png",
      mainDescription: ` Kyoto, Japan's cultural capital, is a city steeped in history, tradition, and natural beauty. Known for its classical Buddhist temples, imperial palaces, colorful shrines, 
                        and beautifully preserved wooden houses, Kyoto offers a serene escape into Japan's rich heritage.
                    Kyoto is a harmonious blend of old-world charm and natural beauty. It offers visitors a chance to immerse
                     themselves in Japan's spiritual traditions while enjoying a tranquil environment. Whether you're marveling at ancient temples or wandering through serene gardens, Kyoto provides an unforgettable cultural experience.`,
    tip: "Don't miss the hidden tea gardens!",
    highlights: [
      `Kinkaku-ji (Golden Pavilion):
          A stunning Zen temple covered in gold leaf,
          surrounded by a serene pond and lush gardens.`,
      `Arashiyama Bamboo Grove:
          Walk through towering bamboo stalks in one of the
           most photographed natural wonders in Kyoto.`,
      `Fushimi Inari Shrine:
          Famous for its thousands of bright red torii gates
           leading up Mount Inari, offering breathtaking views.`,
           `Gion District:
              Kyoto's traditional geisha district, lined with
               charming tea houses and restaurants.`,
           `Kiyomizu-dera Temple:
                  A UNESCO World Heritage Site perched on a hill,
                  providing panoramic views of the city.`
           
    ],
    relatedBlogs: [
      { id: 2, title: "Grand Canyon Adventure", image: "/grand-canyan.jpg",location: "Arizona, USA",
        authorName: "Jane Smith", },
      { id: 3, title: "Alpine Beauty", image: "/alpine.jpg" },
    ],
      blogImages: ["/kyoto.jpg","/kyoto-3.jpg"],
      description: "Step into the historic streets of Kyoto, known for its temples and traditional tea houses.",
      places: 4,
    },
    {
      id: 5,
      title: "Safari in Serengeti",
      location: "Tanzania",
      authorName: "Olivia Green",
      authorImage: "/author5.png",
      blogImages: ["safari.jpg", "safari.jpg"],
      description: "Experience the thrill of a wildlife safari in the Serengeti National Park.",
      places: 8,
    },
    {
      id: 6,
      title: "A Day in Paris",
      location: "Paris, France",
      authorName: "Sophia White",
      authorImage: "/author6.png",
      blogImages: ["paris.jpg", "paris.jpg"],
      description: "Explore the romantic city of Paris, from the Eiffel Tower to cozy cafes.",
      places: 3,
    },
    {
      id: 7,
      title: "Santorini Getaway",
      location: "Santorini, Greece",
      authorName: "Ethan Blue",
      authorImage: "/author7.png",
      blogImages: ["santorini.jpg", "santorini.jpg"],
      description: "Relax on the stunning white-and-blue island of Santorini.",
      places: 4,
    },
    {
      id: 8,
      title: "Amazon Rainforest",
      location: "Brazil",
      authorName: "Lucas Brown",
      authorImage: "/author8.png",
      blogImages: ["amazon-rainforest.jpg", "amazon-rainforest.jpg"],
      description: "Discover the dense, biodiverse Amazon rainforest and its unique wildlife.",
      places: 10,
    },
    {
      id: 9,
      title: "New York City Lights",
      location: "New York, USA",
      authorName: "Ava Black",
      authorImage: "/author9.png",
      blogImages: ["Newyork-lights.jpg", "Newyork-lights.jpg"],
      description: "Feel the energy of New York City with its iconic skyline and bustling streets.",
      places: 6,
    },
    {
      id: 10,
      title: "Iceland's Wonders",
      location: "Iceland",
      authorName: "Mason White",
      authorImage: "/author10.png",
      blogImages: ["Iceland.jpg", "Iceland.jpg"],
      description: "Marvel at Iceland's unique landscapes, including glaciers, volcanoes, and waterfalls.",
      places: 5,
    },
  ]);
  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogHome blogs={blogs} />} />
        <Route path="/blog/:id/" element={<BlogDetail blogs={blogs} />} />
        <Route path="/create-blog" element={<BlogWriterInput addBlog={addBlog} />} />
      </Routes>
    </Router>
  );
};

export default App;
