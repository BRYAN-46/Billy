import Photo from "../assets/Photo.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={Photo} className="profile-photo" />
        <h3>Billy Bryan Burju Simbolon</h3>
        <p>Progammer - Gamer - Chill Guy</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/billy_simbolon_46?igsh=dDhqOXQ1ZWZ1bjVj">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@brtrac46?is_from_webapp=1&sender_device=pc">
            <FaTiktok />
          </a>
          <a href="https://youtube.com/@alwaystobilly?si=Ap960DMliF-C7U7o">
            <FaYoutube />
          </a>
          <a href="https://github.com/BRYAN-46">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
