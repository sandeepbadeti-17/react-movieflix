import { img_300, landscape, img_original } from "../../../config";
import "./landingpage.css";
import SingleComponent from "./SingleComponent";
import { Container, Box } from "@material-ui/core";
import ChildModal from "../../Movies/Home/Pages/ChildModal";

export default function LandingPage({
  title,
  key,
  overview,
  poster,
  backgroundImg,
  id,
  media_type
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
            <h1 className="movie__title">{title === "undefined" ? "Loading..." : title}</h1>
            <p className="movie__overview">{overview === "undefined" ? "Loading..." : overview} </p>
            <div>
              <button className="btn">
                <ChildModal id={id} type={media_type}>
                  Watch Trailer
                </ChildModal>
              </button>
            </div>
          </div>

          <img
            className="movie__poster"
            src={poster ? `${img_300}/${poster}` : "Loading..."}
            alt={title}
          />
        </Container>
      </div>
    </div>
  );
}
