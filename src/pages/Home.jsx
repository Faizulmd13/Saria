import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryImage } from "../utils/categoryMapping";
import "../styles/Home.css";

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigate = useNavigate();

  const featuredSlugs = [
    "smartphones", 
    "laptops", 
    "fragrances", 
    "furniture", 
    "mens-watches", 
    "womens-jewellery"
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // Filter the API data to only show our 6 featured items
        const filtered = data.filter(cat => featuredSlugs.includes(cat.slug));
        setFeaturedCategories(filtered);
      });
  }, []);

  const handleCategoryClick = (slug) => {
    navigate(`/shop?category=${slug}`);
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your <span className="text-primary">Lifestyle</span>
          </h1>
          <p className="hero-subtitle">
            Experience the fusion of high-end aesthetics and modern tech. 
            Curated collections for the digital-native explorer.
          </p>
          <button className="cta-button" onClick={() => navigate('/shop')}>
            Shop Collection
          </button>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="featured-categories">
        <div className="section-header">
          <h2 className="section-title">The Curated Series</h2>
          <p>Exquisite selections across our most popular categories.</p>
        </div>

        <div className="category-grid">
          {featuredCategories.map((cat) => (
            <div 
              key={cat.slug} 
              className="category-card" 
              onClick={() => handleCategoryClick(cat.slug)}
            >
              <div className="card-image-wrapper">
                <img
                  src={getCategoryImage(cat.slug)}
                  alt={cat.name}
                  className="category-image"
                  loading="lazy"
                />
                <div className="card-overlay">
                  <span className="view-text">View Gallery</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-info">
                  <h3>{cat.name}</h3>
                  <div className="category-line"></div>
                </div>
                <button className="view-btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;