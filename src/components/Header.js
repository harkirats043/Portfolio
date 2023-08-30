import { Link, redirect } from "react-router-dom";
import "./Header.css";

function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (
    <header className="head-container">
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div className="glow-on-hover" type="button">HOME</div>
        </Link>
        <Link to="/about" >
          <div className="glow-on-hover" type="button">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="glow-on-hover" type="button">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;


