import LandingPage from "./Pages/LandingPage";
import SingleComponent from "./Pages/SingleComponent";
// import Trending from "./Pages/Trending";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  trendingMovies,
  topRatedMovies,
  trendingTv,
  topRatedTv
} from "../../config";
import { Container } from "@material-ui/core";
import { baseUrl, apiKey } from "../../config";

export default function Home() {
  const [content, setContent] = useState([]);
  const fetchtrending = async () => {
    const { data } = await axios.get(
      `${baseUrl}/trending/movie/day?api_key=${apiKey}`
    );
    setContent(
      data.results[Math.floor(Math.random() * data.results.length) - 1]
    );
    return data;
  };

  useEffect(() => {
    fetchtrending();
  }, []);
  return (
    <>
      <div className="trending">
        <LandingPage
          title={`${content?.original_title || content?.name || content?.title
            }`}
          backgroundImg={`${content?.backdrop_path || content?.poster_path}`}
          poster={`${content?.poster_path || content?.backdrop_path}`}
          overview={`${content?.overview}`}
          media_type={`${content?.media_type}`}
          id={`${content?.id}`}
        />
        <div className="container">
          <Container>
            <SingleComponent
              title="Trending Movies"
              fetchUrl={trendingMovies}
              type="movie"
            />
          </Container>
        </div>
        <div className="container">
          <Container>
            <SingleComponent
              title="TopRated Movies"
              fetchUrl={topRatedMovies}
              type="movie"
            />
          </Container>
        </div>
        <div className="container">
          <Container>
            <SingleComponent
              title="Trending Show"
              type="tv"
              fetchUrl={trendingTv}
            />
          </Container>
        </div>
        <div className="container">
          <Container>
            <SingleComponent
              title="TopRated Shows"
              type="tv"
              fetchUrl={topRatedTv}
            />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
