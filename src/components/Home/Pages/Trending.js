import "./css/trending.css";
import { img_300 } from "../../../config";
export default function Trending({ title, poster }) {
  return (
    <div>
      <div className="trending__component ">
        <img className="trending__poster" src={`${img_300}/${poster}`} alt="" />
        <div className="trending__layout">hello</div>
        <div className="trending__title">{title}</div>
      </div>
    </div>
  );
}
