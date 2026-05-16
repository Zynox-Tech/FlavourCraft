// components/Footer.js
import "@/app/styles/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Flavor<span>Craft.</span></h2>
        </div>
        <div className="contact">
          <p>&copy; 2024 Flavor<span>Craft</span>. Made by Hashim Khan.</p>
          <p>Email: <a href="mailto:info@flavorcraft.com">info@flavorcraft.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567-890</a></p>
        </div>
        <div className="footer-social">
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
