const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>© 2026 **Saria** Digital Storefront. All rights reserved.</p>
        
        <nav className="footer-links">
          <a 
            href="https://github.com/Faizulmd13/Saria" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Source Code
          </a>
          <span className="separator"> | </span>
          <a 
            href="https://github.com/Faizulmd13" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </nav>

        <p className="footer-tagline">Built with React & Caffeine.</p>
      </div>
    </footer>
  );
};

export default Footer;