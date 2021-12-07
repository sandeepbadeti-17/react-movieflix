import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const history = useHistory();

  const scrollTop = () => {
    let scrolled = window.scrollY;
    if (scrolled >= 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
    }
  };
  const changebackground = () => {
    let scroll = window.scrollY;
    if (scroll >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  return (
    <Router>
      <div>
        <div className={navbar ? "header active " : "header"}>
          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h1 style={{ cursor: "pointer" }} onClick={scrollTop}>
              Movieflix
            </h1>
            <ul className="header__items">
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/"
                  onClick={() => history.push("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/movies"
                  onClick={() => {
                    history.push("/movies");
                  }}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/series"
                  onClick={() => {
                    history.push("/series");
                  }}
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/search"
                  onClick={() => {
                    history.push("/search");
                  }}
                  style={{ marginRight: "0" }}
                >
                  Search
                </Link>
              </li>
            </ul>
            <ul className="header__bottom">
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/"
                  onClick={() => history.push("/")}
                >
                  <HomeIcon />
                </Link>
              </li>
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/movies"
                  onClick={() => {
                    history.push("/movies");
                  }}
                >
                  <MovieIcon />
                </Link>
              </li>
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/series"
                  onClick={() => {
                    history.push("/series");
                  }}
                >
                  <TvIcon />
                </Link>
              </li>
              <li>
                <Link
                  className={navbar ? "a active " : "a"}
                  to="/search"
                  onClick={() => {
                    history.push("/search");
                  }}
                  style={{ marginRight: "0" }}
                >
                  <SearchIcon />
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </Router>
  );
}
