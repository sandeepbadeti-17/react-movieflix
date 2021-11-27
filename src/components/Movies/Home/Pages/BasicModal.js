import * as React from "react";
import "./basicmodal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ChildModal from "./ChildModal";
import { img_300, img_original, landscape } from "../../../../config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  // bgcolor: "#131313f2;",
  // boxShadow: 24,
  p: 0
};
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
export default function BasicModal({
  children,
  title,
  overview,
  poster,
  backgroundImg,
  data,
  type,
  id
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    // setId(data.id);

    // console.log(id);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{ color: "white" }} onClick={handleOpen}>
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ background: "#131313f2" }}
      >
        <Box sx={style}>
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
          <div className="modal__content">
            <img
              className="modal__poster"
              src={poster ? `${img_300}/${poster}` : img_300}
              alt={title}
            />
            <div className="modal__details">
              <h1 className="modal__title">{title}</h1>
              <p className="modal__overview">{overview} </p>
              <div>
                <button className="btn">
                  <ChildModal
                    id={id}
                    type={type}
                    // data={data}
                    title={title}
                  />
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
