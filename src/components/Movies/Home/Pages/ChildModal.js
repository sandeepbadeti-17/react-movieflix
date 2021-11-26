import * as React from "react";
import "./basicmodal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import YouTube from "react-youtube";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { Container } from "@mui/material";
const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "#000000eb",
  // boxShadow: 24,
  p: 0
};
const opts = {
  // height: "390",
  // maxWidth: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
export default function ChildModal({ data, title, id, type }) {
  const [open, setOpen] = React.useState(false);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const getVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=205cebadb659f10935a047f6a32e5daa&language=en-US`
    );
    setTrailerUrl(data.results[0]?.key);
  };

  const handleOpen = () => {
    getVideo();

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button style={{ color: "white" }} onClick={handleOpen}>
        Watch Trailer
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box>
          <Container sx={{ ...style }}>
            <YouTube
              videoId={trailerUrl} // defaults -> null
              // defaults -> ''
              opts={opts}
              className="videoPlayer" // defaults -> {}
              // defaults -> noop
            />
            <Button onClick={handleClose}>
              <CancelIcon
                style={{ width: "3em", height: "2em", color: "red" }}
                className="childModal__close"
              />
            </Button>
          </Container>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
