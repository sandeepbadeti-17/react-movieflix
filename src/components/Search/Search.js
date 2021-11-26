import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { img_300, no_300 } from "../../config";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import { Container } from "@material-ui/core";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";

import axios from "axios";
import Footer from "../Footer/Footer";
export default function Serch() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState();
  const [content, setContent] = useState();
  const [numOfPages, setnumofPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      // console.log(setContent(data.results));
      // console.log(searchText.length);
      setnumofPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const pageHandler = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    return () => {
      fetchSearch();
    };
  }, [type, page]);
  return (
    <>
      <Container>
        <div>
          <div
            style={{
              display: "flex",
              maxWidth: "800px",
              margin: "auto",
              padding: "5rem 0 2rem 0"
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              style={{
                flex: "1",
                background: "grey",
                color: "white",
                marginRight: "0.2rem"
              }}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button onClick={fetchSearch} variant="contained">
              <SearchIcon />
            </Button>
          </div>
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "800px",
              margin: "auto"
            }}
          >
            <Tab
              style={{ width: "50%", color: "white" }}
              label="Search Movies"
            />
            <Tab
              style={{ width: "50%", color: "white" }}
              label="Search Series"
            />
          </Tabs>
        </div>
        <div>
          <div className="movie__card">
            {content &&
              content.map((data) => {
                return (
                  <div key={data.id} className="trending__card">
                    <div className="trending__component ">
                      <img
                        className="trending__poster"
                        src={
                          data?.poster_path
                            ? `${img_300}/${
                                data?.poster_path || data?.backdrop_path
                              }`
                            : no_300
                        }
                        alt=""
                      />
                      <div className="trending__layout">
                        <YouTubeIcon
                          style={{ width: "4rem", height: "4rem" }}
                        />
                      </div>
                    </div>
                    <span className="trending__title">
                      {data?.title || data?.original_title || data?.name}
                    </span>
                  </div>
                );
              })}
            {/* {searchText &&
            !content &&
            (type ? (
              <h2 style={{ color: "black" }}>No Series Found</h2>
            ) : (
              <h2 style={{ color: "black" }}>NO Movies Found</h2>
            ))} */}
          </div>
          {numOfPages > 1 && (
            <Pagination
              hidePrevButton
              hideNextButton
              className="pagination"
              onChange={(e) => pageHandler(e.target.textContent)}
              setpage={page}
              count={numOfPages}
              color="secondary"
            />
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}
