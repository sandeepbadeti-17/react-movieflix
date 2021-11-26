import { useState } from "react";
import "./footer.css";
export default function Footer() {
  const [navbar, setNavbar] = useState(false);

  const scrollTop = () => {
    let scrolled = window.scrollY;
    if (scrolled >= 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
    }
  };
  const changebackground = () => {
    let scroll = window.scrollY;
    if (scroll >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);
  return (
    <div className="footer">
      <div
        className="footer__background"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg`,
          backgroundPosition: "center,center",
          height: "100%",
          objectFit: "cover"
        }}
      ></div>
      <div className="footer__layout"></div>
      <div className="footer__content">
        <h1 className="footer__title" onClick={scrollTop}>
          ShowTime
        </h1>
        <div>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">Media Centre</a>
            </li>
            <li>
              <a href="/">Investor Relations</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>
              <a href="/">Ways to Watch</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Cookie Preferences</a>
            </li>
            <li>
              <a href="/">Corporate Information</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Speed Test</a>
            </li>
            <li>
              <a href="/">Legal Notices</a>
            </li>
            <li>
              <a href="/">Only on ShowTime</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
