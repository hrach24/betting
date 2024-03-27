import React from "react";
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      {Array.from(Array(5), (e, i) => (
        <div key={e} style={{ height: "100px", marginTop: "10px" }}>
          sdasd {i}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
