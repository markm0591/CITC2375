export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-column">
        <h4>Shop</h4>
        <ul>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Staff Picks</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>About</h4>
        <ul>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <a href="#" aria-label="X">𝕏</a>
        <a href="#" aria-label="Instagram">◎</a>
        <a href="#" aria-label="YouTube">▶</a>
      </div>

      <p className="footer-copyright">© 2026 Driftwood & Co. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
