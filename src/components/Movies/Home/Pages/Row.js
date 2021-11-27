import Genre from "../Genre";
import useGenre from "../../../hooks/useGenre";
import "./row.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { img_300, no_300 } from "../../../../config";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Pagination from "@mui/material/Pagination";
import BasicModal from "./BasicModal";

import { Container } from "@material-ui/core";
export default function Row({ title, fetchUrl, type }) {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [pageNo, setPage] = useState();
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_genres=${genreforURL}`
    );

    setContent(data.results);
    // console.log(data.results);
    setNumOfPages(data.total_pages);
  };
  const pageHandler = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, [genreforURL, pageNo]);
  return (
    <div className="movies">
      <Container>
        <h3>{title}</h3>
        <Genre
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setpage={setPage}
          type="movie"
        />
      </Container>
      <div className="movie__card">
        {content.map((data) => {
          // console.log(data.id);
          return (
            <BasicModal
              title={data?.title || data?.original_title || data?.name}
              poster={`${data?.poster_path || data?.backdrop_path}`}
              backgroundImg={`${data?.backdrop_path || data?.poster_path}`}
              overview={`${data?.overview}`}
              type={type}
              id={`${data?.id}`}
              key={data.id}
            >
              {console.log(data?.id)}
              <div className="trending__card">
                <div className="trending__component ">
                  <img
                    className="trending__poster"
                    src={
                      data?.poster_path
                        ? `${img_300}/${data?.poster_path || data?.backdrop_path
                        }`
                        : no_300
                    }
                    alt=""
                  />
                  <div className="trending__layout">
                    <YouTubeIcon style={{ width: "4rem", height: "4rem" }} />
                  </div>
                </div>
                <span className="trending__title">
                  {data?.original_title || data?.original_name || data?.name}
                </span>
              </div>
            </BasicModal>
          );
        })}
      </div>
      {/* <Pagination count={10} /> */}
      <Pagination
        hidePrevButton
        hideNextButton
        className="pagination"
        onChange={(e) => pageHandler(e.target.textContent)}
        setpage={pageNo}
        count={numOfPages}
        color="primary"
      />
    </div>
  );
}
