import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          position: "relative",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} Marta García Canora
      </p>
    </div>
  );
}

export default Footer;
