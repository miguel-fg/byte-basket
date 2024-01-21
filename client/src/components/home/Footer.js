// NavBar.js
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <p className="logo-description">
            çCopyright 2024. All Rights Reserved.
          </p>
        </div>
        <div className="footer-links">
          <a
            className="footer-link"
            href="https://www.facebook.com/universityofbc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/social1.png" alt="social-icon-Facebook" />
          </a>
          <a
            className="footer-link"
            href="https://twitter.com/UBC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/social2.png" alt="social-icon-X" />
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/universityofbc/?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/social3.png" alt="social-icon-Instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
