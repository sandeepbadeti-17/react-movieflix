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
          Movieflix
        </h1>
        <div>
          <ul>
            <li>
              <a href="https://sandeep-badeti.netlify.app/" target="_blank" rel='noopener noreferrer'>Portfolio</a>
            </li>
            <li>
              <a href="https://github.com/sandeepbadeti-17" target="_blank" rel='noopener noreferrer'>GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sandeep-badeti-56b3b520b/" target="_blank" rel='noopener noreferrer'>LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/Sandeep17347946?s=09%20" target="_blank" rel='noopener noreferrer'>Twitter</a>
            </li>
            <li>
              <a href="https://instagram-clone-by-sb.netlify.app/" target="_blank" rel='noopener noreferrer'>Instagram</a>
            </li>
            <li>
              <a href="https://instagram-clone-by-sb.netlify.app/" target="_blank" rel='noopener noreferrer'>Instagram_Clone</a>
            </li>
            <li>
              <a href="https://bill-cash.netlify.app/" target="_blank" rel='noopener noreferrer'>Bill Cash</a>
            </li>
            <li>
              <a href="https://palindrome-date.netlify.app/" target="_blank" rel='noopener noreferrer'>Palindrome</a>
            </li>
            <li>
              <a href="https://codesandbox.io/u/Sandeep-17-bot" target="_blank" rel='noopener noreferrer'>CodeSandBox</a>
            </li>
            <li>
              <a href="https://hashnode.com/@Code-Sandeep">Hashnode</a>
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
              <a href="/">Only on Movieflix</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
