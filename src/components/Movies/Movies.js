import Row from "./Home/Pages/Row";
import "./Home/Pages/row.css";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import useGenre from "../hooks/useGenre";
import { movies, movieGenre } from "../../config";
export default function Moveis() {
  return (
    <>
      <div className="movies__list" style={{ padding: "5rem 0" }}>
        <Row title="Movies" type="movie" fetchUrl={movies} />
      </div>
      <Footer />
    </>
  );
}
