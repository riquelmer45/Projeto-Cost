import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaGithub
            onClick={() =>
              window.open("https://github.com/riquelmer45", "_blank")
            }
          />
        </li>
        <li>
          <FaInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/riquelmermodesto.dev/",
                "_blank"
              )
            }
          />
        </li>
        <li>
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/anderson-riquelmer-modesto-0aa966220/",
                "_blank"
              )
            }
          />
        </li>
      </ul>
      <p className={style.copy_right}>
        <span>Anderson Riquelmer</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
