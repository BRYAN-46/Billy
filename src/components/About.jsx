import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Saya Billy Bryan Burju Simbolon, Mahasiswa Satya Terra Bhinneka
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          temporibus odio explicabo expedita ullam saepe numquam voluptatem
          corrupti officia consequatur recusandae dolorem aliquam dolores nihil
          id, pariatur quaerat quidem ipsam!
        </p>
        <h4>Programming Langguage & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
          <FaPython />
          <SiMysql />
          <VscVscode />
          <FaFigma />
        </div>
      </div>
    </section>
  );
}

export default About;
