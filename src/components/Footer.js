import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem", background: "#0a0f0d", color: "#fff" }}>
      <p>© {new Date().getFullYear()} RKbyte. All rights reserved.</p>
    </footer>
  );
}

export default Footer;