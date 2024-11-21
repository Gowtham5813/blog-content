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
      authorImage: "park-slope.jpg",
      mainDescription: ` Park Slope, located in Brooklyn, is a vibrant neighborhood known for its charming brownstone-lined streets, historic architecture, and family-friendly atmosphere.
                        Anchored by the sprawling Prospect Park, it offers lush green spaces perfect for picnics, jogging, or leisurely strolls. The area boasts a lively dining and shopping scene,
                        with eclectic restaurants, cozy cafes, and unique boutiques along Fifth and Seventh Avenues. Its cultural vibe is enhanced by local art galleries and community events. Whether you're
                          seeking outdoor adventure or urban charm, Park Slope provides a delightful escape from the city’s hustle and bustle.`,
      tip: "Visit on a weekend morning to enjoy a relaxed stroll, farmer’s market, and vibrant local culture.",
      highlights: [
        `Prospect Park: 
            A 526-acre oasis designed by the creators of Central Park, perfect for picnics, jogging, and paddle boating.`,
        `Historic Brownstones: 
            Iconic architecture along tree-lined streets, showcasing Park Slope’s rich history.`,
        `Brooklyn Museum and Botanic Garden:
             Just a short walk away, offering art and natural beauty.`,
          `Fifth and Seventh Avenues:
              Bustling with unique shops, cozy cafes, and diverse restaurants.`,
          `Grand Army Plaza:
               The neighborhood’s gateway, featuring the Soldiers’ and Sailors’ Arch and a weekly greenmarket.`
           
    ],
    relatedBlogs: [
      { id: 2, title: "Grand Canyon Adventure", image: "/grand-canyon-3.jpg",location: "Arizona, USA",
        authorName: "Jane Smith", },
      { id: 3, title: "Alpine Beauty", image: "/alpine.jpg" },
    ],
      blogImages: ["/park-slope.jpg", "/park-slope-3.jpg"],
      description: "Discover the charm of Park Slope with its historic buildings and vibrant culture.",
      places: 5,
    },
    {
      id: 2,
      title: "Grand Canyon Adventure",
      location: "Arizona, USA",
      authorName: "Jane Smith",
      authorImage: "/author2.png",
      mainDescription: ` The Grand Canyon, a UNESCO World Heritage Site,
                          is a breathtaking natural wonder carved by the Colorado River over millions of years.
                            Its vast expanse of layered red rock offers panoramic views that change dramatically with the sunlight.
                            Visitors can hike its iconic trails, such as the Bright Angel and South Kaibab, or explore the rim's scenic viewpoints.
                            The Grand Canyon is also rich in history, home to ancient Native American heritage and diverse wildlife. Whether you’re seeking adventure or quiet reflection,
                          it’s a destination that leaves a lasting impression.`,
    tip: "Arrive early in the morning to avoid crowds and enjoy the best lighting for photos.",
    highlights: [
      `Mather Point: A must-see viewpoint offering stunning sunrise and sunset vistas.`,
        `Bright Angel Trail: A popular hiking trail with accessible sections for all skill levels.`,
        `Desert View Watchtower: Iconic architecture with sweeping views of the canyon and Colorado River.`,
       ` Colorado River Rafting: An adventurous way to experience the canyon from below.`,
        `Grand Canyon Village: The cultural hub with museums, gift shops, and historic lodges.`
           
    ],
    relatedBlogs: [
      { id: 4, title: "Discover Kyoto", image: "/kyoto.jpg",location: "Kyoto, Japan",
        authorName: "Jane Smith", },
      { id: 3, title: "Alpine Beauty", image: "/alpine.jpg" },
    ],
      blogImages: ["/grand-canyon-3.jpg", "/grand-canyan-2.jpg"],
      description: "Experience the grandeur of the Grand Canyon with stunning views and adventurous trails.",
      places: 7,
    },
    {
      id: 3,
      title: "Alpine Beauty",
      location: "Swiss Alps",
      authorName: "Emma Brown",
      authorImage: "/author3.png",
      mainDescription: `Alpine Beauty refers to the serene and picturesque landscapes of high mountain regions,
                       where snow-capped peaks, lush meadows, and crystal-clear lakes captivate every traveler.
                        These areas often feature unique flora and fauna that thrive in cooler, elevated climates.
                         From hiking trails winding through wildflower-filled valleys to cozy mountain villages,
                         Alpine destinations offer both adventure and tranquility. The crisp, clean air and panoramic vistas provide a rejuvenating escape from the daily grind.
                          Whether you're skiing, trekking, or simply soaking in the views, the Alps offer an unforgettable experience.

`,
    tip: "Visit during late spring or early summer for blooming meadows and accessible trails.",
    highlights: [
      `Snow-Capped Peaks: Stunning mountain ranges offering breathtaking views and photo opportunities.`,
        `Crystal-Clear Lakes: Reflective alpine lakes like Lake Geneva and Lake Bled enhance the serene atmosphere.`,
        `Charming Villages: Explore quaint towns like Zermatt and Chamonix, rich in culture and history.`,
        `Scenic Hiking Trails: Well-marked routes through valleys and ridges, suitable for all skill levels.`,
        `Winter Sports: Skiing, snowboarding, and other snow activities for adrenaline seekers.`
           
    ],
    relatedBlogs: [
      { id: 4, title: "Discover Kyoto", image: "/kyoto.jpg",location: "Kyoto, Japan",
        authorName: "Jane Smith", },
      { id: 5, title: "Safari in Serengeti", image: "/safari-3.jpg" },
    ],
      blogImages: ["/alpine.jpg", "/alpine-2.jpg"],
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
      { id: 5, title: "Safari in Serengeti", image: "/safari-3.jpg",location: "Arizona, USA",
        authorName: "Jane Smith", },
      { id: 6, title: "A Day in Paris", image: "/paris-3.jpg" },
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
      mainDescription: ` A safari in the Serengeti offers a once-in-a-lifetime experience of witnessing Africa’s iconic wildlife in their natural habitat.
                        Renowned for its vast savannahs and incredible biodiversity, the Serengeti is home to lions, elephants, zebras, and the famous Great Migration of wildebeest.
                        Visitors can enjoy thrilling game drives, breathtaking sunsets, and the enchanting sounds of nature. The Serengeti’s landscapes, from grassy plains to rocky kopjes, provide stunning backdrops for every adventure.
                        This safari promises close encounters with wildlife and memories that will last forever.`,
    tip: "Visit during the dry season (June to October) for the best wildlife spotting opportunities.",
    highlights: [
      `The Great Migration: Witness millions of wildebeest and zebras crossing the plains in search of water and grazing.`,
        `Big Five Sightings: Spot lions, leopards, elephants, rhinos, and buffalos in their natural environment.`,
        `Hot Air Balloon Safari: Enjoy panoramic views of the Serengeti at sunrise for a truly unique experience.`,
        `Ngorongoro Crater: Explore this nearby UNESCO site, a haven for wildlife within a volcanic caldera.`,
        `Seronera Valley: A prime spot for spotting predators like lions and cheetahs, especially during the dry season.`
                  
    ],
    relatedBlogs: [
      { id: 6, title: "A Day in Paris", image: "/paris-3.jpg",location: "Paris, France",
        authorName: "Jane Smith", },
      { id: 7, title: "Santorini Getaway", image: "/santorini-2.jpg" },
    ],
      blogImages: ["/safari-3.jpg", "/safari-2.jpg"],
      description: "Experience the thrill of a wildlife safari in the Serengeti National Park.",
      places: 8,
    },
    {
      id: 6,
      title: "A Day in Paris",
      location: "Paris, France",
      authorName: "Sophia White",
      authorImage: "/author6.png",
      mainDescription: ` A day in Paris is a perfect blend of romance, history, and culture, with iconic landmarks, world-class art, and delectable cuisine around every corner. 
                        From the majestic Eiffel Tower to the historic streets of Montmartre, Paris offers a captivating mix of charm and grandeur. Stroll along the Seine River, explore art treasures at the Louvre, and savor a classic croissant at a sidewalk café.
                        The city’s beauty lies not only in its famous attractions but also in its vibrant neighborhoods and timeless ambiance.
                          Paris truly lives up to its reputation as the "City of Light.`,
    tip: "Start your day early to make the most of the attractions and avoid long queues at popular sites.",
    highlights: [
      `Eiffel Tower: Capture breathtaking views of Paris from this iconic landmark’s observation deck.`,
        `Louvre Museum: Marvel at world-famous artworks, including the Mona Lisa and Venus de Milo.`,
        `Notre Dame Cathedral: Admire the stunning Gothic architecture and serene surroundings.`,
        `Montmartre: Wander through this bohemian district, home to Sacré-Cœur and charming artists' squares.`,
        `Seine River Cruise: Enjoy a scenic boat ride with views of Paris's iconic bridges and landmarks.`
           
    ],
    relatedBlogs: [
      { id: 7, title: "Santorini Getaway", image: "/santorini-2.jpg" },
      { id: 8, title: "Amazon Rainforest", image: "/amazon-rainforest-2.jpg" },
    ],
      blogImages: ["/paris-3.jpg", "/paris-2.jpg"],
      description: "Explore the romantic city of Paris, from the Eiffel Tower to cozy cafes.",
      places: 3,
    },
    {
      id: 7,
      title: "Santorini Getaway",
      location: "Santorini, Greece",
      authorName: "Ethan Blue",
      authorImage: "/author7.png",
      mainDescription: ` A Santorini getaway is a dream escape to a stunning Greek island known for its whitewashed buildings,
                          blue-domed churches, and breathtaking sunsets. Perched atop volcanic cliffs, Santorini offers spectacular views of the Aegean Sea and the iconic caldera.
                          Its charming villages, crystal-clear waters, and rich history make it a perfect destination for romance, relaxation, and adventure. Visitors can enjoy sun-soaked beaches,
                           delicious Mediterranean cuisine, and picturesque streets filled with boutiques and cafes.
                          Santorini’s timeless beauty and serene ambiance create an unforgettable island experience.`,
    tip: " Visit during shoulder seasons (April to June or September to October) for pleasant weather and fewer crowds.",
    highlights: [
      `Oia Sunset: Witness the world-famous sunset from Oia, a moment of pure magic over the caldera.`,
        `Red Beach: Explore the unique volcanic landscape and crystal-clear waters of this stunning beach.`,
        `Fira Town: Discover vibrant nightlife, local shops, and breathtaking caldera views in Santorini’s capital.`,
        `Santorini Wineries: Savor local wines, especially the Assyrtiko, at charming cliffside wineries.`,
        `Akrotiri Archaeological Site: Step back in time at this ancient Minoan city preserved by volcanic ash.`
           
    ],
    relatedBlogs: [
      { id: 8, title: "Amazon Rainforest", image: "/amazon-rainforest-2.jpg" },
      { id: 9, title: "New York City Lights", image: "/Newyork-lights-2.jpg" },
    ],
      blogImages: ["/santorini-2.jpg", "/santorini-3.jpg"],
      description: "Relax on the stunning white-and-blue island of Santorini.",
      places: 4,
    },
    {
      id: 8,
      title: "Amazon Rainforest",
      location: "Brazil",
      authorName: "Lucas Brown",
      authorImage: "/author8.png",
      mainDescription: ` The Amazon Rainforest, often called the "lungs of the Earth," is a sprawling natural wonder teeming with unparalleled biodiversity. 
                          Spanning nine countries, this lush jungle is home to countless species of plants, animals, and indigenous tribes. Its dense canopy, winding rivers, and unique ecosystems offer incredible opportunities for exploration and discovery.
                          Visitors can experience thrilling jungle treks, river cruises, and encounters with wildlife like jaguars, macaws, and pink dolphins.
                          The Amazon's pristine beauty and ecological significance make it a must-visit destination for nature lovers and adventurers alike.`,
    tip: "Visit during the dry season (June to October) for easier jungle exploration and wildlife spotting.",
    highlights: [
      `Canopy Walks: Experience the rainforest from above with thrilling walks on suspended bridges.`,
        `Wildlife Spotting: Encounter exotic creatures like sloths, toucans, and caimans in their natural habitat.`,
        `Amazon River Cruises: Explore the lifeline of the rainforest, with opportunities to see pink river dolphins.`,
        `Indigenous Villages: Learn about the unique cultures and traditions of Amazonian tribes.`,
        `Night Safaris: Discover the jungle's nocturnal wonders, including glowing insects and night predators.`
           
    ],
    relatedBlogs: [
      { id: 9, title: "New York City Lights", image: "/Newyork-lights-2.jpg" },
      { id: 10, title: "Iceland's Wonders", image: "/Iceland-2.jpg" },
    ],
      blogImages: ["/amazon-rainforest-2.jpg", "/amazon-rainforest-3.jpg"],
      description: "Discover the dense, biodiverse Amazon rainforest and its unique wildlife.",
      places: 10,
    },
    {
      id: 9,
      title: "New York City Lights",
      location: "New York, USA",
      authorName: "Ava Black",
      authorImage: "/author9.png",
      mainDescription: ` New York City, the "City That Never Sleeps," comes alive at night with dazzling lights and electric energy. 
                        From the iconic glow of Times Square to the breathtaking skyline views, the city's lights are a spectacle to behold. Visitors can explore illuminated landmarks,
                        enjoy rooftop views, or take a serene stroll along the water with Manhattan as the backdrop.
                        NYC’s nightlife is as diverse as the city itself, with Broadway shows, night cruises, and vibrant neighborhoods to explore.
                        The city’s lights truly reflect its dynamic and ceaseless charm.`,
    tip: "Visit rooftop bars or observation decks for the best panoramic views of the city lights.",
    highlights: [
      `Times Square: Immerse yourself in the neon glow and vibrant energy of NYC’s iconic crossroads.`,
      `Empire State Building: Enjoy spectacular city views from its observation deck, open late into the night.`,
      `Brooklyn Bridge: Take an evening walk for stunning views of Manhattan’s skyline and shimmering waters.`,
      `Top of the Rock: Experience breathtaking views of Central Park and the Empire State Building.`,
      `Hudson River Night Cruises: Glide along the river with views of the Statue of Liberty and the illuminated city skyline.`
           
    ],
    relatedBlogs: [
      { id: 10, title: "Iceland's Wonders", image: "/Iceland-2.jpg" },
      { id: 1, title: "Explore park Slope", image: "/park-slope.jpg" },
    ],
      blogImages: ["/Newyork-lights-2.jpg", "/Newyork-lights-3.jpg"],
      description: "Feel the energy of New York City with its iconic skyline and bustling streets.",
      places: 6,
    },
    {
      id: 10,
      title: "Iceland's Wonders",
      location: "Iceland",
      authorName: "Mason White",
      authorImage: "/author10.png",
      mainDescription: ` Iceland’s wonders are a mesmerizing blend of natural beauty, geological marvels, and untouched wilderness.
                        Known as the "Land of Fire and Ice," Iceland offers everything from cascading waterfalls and geothermal hot springs to majestic glaciers and active volcanoes.
                        Visitors can witness the ethereal Northern Lights, explore vast lava fields, and relax in the soothing Blue Lagoon. The country’s rugged landscapes and vibrant culture make it a haven for adventurers and nature enthusiasts alike.
                        Iceland’s unique charm lies in its ability to combine stark beauty with serene tranquility.`,
    tip: "Visit during winter (September to April) for the Northern Lights or summer (June to August) for endless daylight and accessible hiking.",
    highlights: [
      `Northern Lights: Marvel at the dazzling auroras dancing across the night sky.`,
        `Blue Lagoon: Relax in this iconic geothermal spa surrounded by lava fields.`,
        `Golden Circle: Explore must-see attractions like Gullfoss waterfall, Geysir, and Þingvellir National Park.`,
        `Jökulsárlón Glacier Lagoon: Witness icebergs drifting serenely in this breathtaking glacial lagoon.`,
        `Reykjavik: Discover Iceland’s capital with its colorful architecture, vibrant culture, and unique cuisine.`
           
    ],
    relatedBlogs: [
      { id: 2, title: "Grand Canyon Adventure", image: "/grand-canyon-3.jpg",location: "Arizona, USA",
        authorName: "Jane Smith", },
      { id: 3, title: "Alpine Beauty", image: "/alpine.jpg" },
    ],
      blogImages: ["/Iceland-2.jpg", "/Iceland-3.jpg"],
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
