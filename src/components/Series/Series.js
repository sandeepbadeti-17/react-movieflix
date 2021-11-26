import Row from "../Movies/Home/Pages/Row";
import { tvshow } from "../../config";
import Footer from "../Footer/Footer";
export default function Series() {
  return (
    <>
      <div className="movies__list">
        <Row title="Tv Shows" type="tv" fetchUrl={tvshow} />
      </div>
      <Footer />
    </>
  );
}
