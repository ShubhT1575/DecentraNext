import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 text-center" 
          style={{ background: `radial-gradient(circle at 30% 30%, rgba(0, 191, 255, 0.8), rgba(0, 0, 0, 0) 50%), 
                 radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.8), rgba(0, 0, 0, 0) 50%),
                 linear-gradient(135deg, #0d0d2b, #1b1b3a)` }}

      >
        <div className="container">
          <span className="text-light">
          © 2025<span id="year"></span>
            <a href="#" className="text-warning fw-medium">
            ⚡ DecentraNext.
            </a>
            {" "}All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
