import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-items flex-row">
        <div className="made-by">
          Made with <i className="fas fa-heart footer-icon"></i> By Ishita
          Keshawani
        </div>
        <div>
          <a href="https://github.com/ishitakeshawani/Quiz-App" target="_blank">
            <i className="fab fa-github footer-social-icon"></i>
          </a>
          <a href="https://twitter.com/ishitakeshawani" target="_blank">
            <i className="fab fa-twitter footer-social-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ishitakeshawani/"
            target="_blank"
          >
            <i className="fab fa-linkedin footer-social-icon"></i>
          </a>
        </div>
        <div className="copy-right">© 2022 Memory Nomads</div>
      </div>
    </footer>
  );
}
