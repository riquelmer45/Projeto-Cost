import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={style.copy_right}>
        <span>Anderson Riquelmer</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
