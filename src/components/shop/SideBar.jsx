import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../../styles/SideBar.css";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (slug) => {
    if (slug === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", slug);
    }
    setSearchParams(searchParams);
  };

  if (loading) return <div className="sidebar-skeleton">Loading Categories...</div>;

  return (
    <aside className="shop-sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Collections</h3>
        <ul className="category-list">
          <li 
            className={`category-item ${!activeCategory ? "active" : ""}`}
            onClick={() => handleCategoryClick("all")}
          >
            All Products
          </li>
          
          {categories.map((cat) => (
            <li
              key={cat.slug}
              className={`category-item ${activeCategory === cat.slug ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat.slug)}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;