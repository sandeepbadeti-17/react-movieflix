import { img_300, landscape, img_original } from "../../../config";
import "./landingpage.css";
import SingleComponent from "./SingleComponent";
import { Container, Box } from "@material-ui/core";

export default function LandingPage({
  title,
  key,
  overview,
  poster,
  backgroundImg
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: backgroundImg
            ? `url(${img_original}/${backgroundImg})`
            : landscape,
          backgroundPosition: "center,center",
          height: "100%",
          objectFit: "cover"
        }}
      ></div>
      <div className="banner__layout"></div>

      <div className="banner__content">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="movie__details">
            <h1 className="movie__title">{title}</h1>
            <p className="movie__overview">{overview} </p>
            <div>
              <button className="btn btn1">Watch Now</button>
              <button className="btn btn2">Watch Trailer</button>
            </div>
          </div>

          <img
            className="movie__poster"
            src={poster ? `${img_300}/${poster}` : img_300}
            alt={title}
          />
        </Container>
      </div>
    </div>
  );
}
