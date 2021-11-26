import axios from "axios";
import { useState, useEffect } from "react";
import "./css/trending.css";
import { img_300 } from "../../../config";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Modal } from "@mui/material";
import BasicModal from "../../Movies/Home/Pages/BasicModal";
export default function SingleComponent({ title, fetchUrl }) {
  const [content, setContent] = useState([]);
  const [open, setOpen] = useState(false);

  const get = `${fetchUrl}`;
  const getData = async () => {
    const { data } = await axios.get(`${fetchUrl}`);
    setContent(data.results);
    // console.log(data.results);
  };
  useEffect(() => {
    getData();
  }, [get]);
  return (
    <>
      <h3>{title}</h3>
      <div className="t">
        {content.map((data) => {
          return (
            <BasicModal
              key={data.id}
              title={data?.title || data?.original_title || data?.name}
              poster={`${data?.poster_path || data?.backdrop_path}`}
              backgroundImg={`${data?.backdrop_path || data?.poster_path}`}
              overview={`${data?.overview}`}
            >
              <div className="trending__card">
                <div className="trending__component ">
                  <img
                    className="trending__poster"
                    src={`${img_300}/${
                      data?.poster_path || data?.backdrop_path
                    }`}
                    alt=""
                  />
                  <div className="trending__layout">
                    <YouTubeIcon style={{ width: "4rem", height: "4rem" }} />
                  </div>
                </div>
                <div className="trending__title">
                  {data?.title || data?.original_title || data?.name}
                </div>
              </div>
            </BasicModal>
          );
        })}
      </div>
    </>
  );
}
