import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosFootball } from "react-icons/io";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { FaBasketball } from "react-icons/fa6";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoIosFootball />}
          >
            <h3 className="vertical-timeline-element-title">Futsal</h3>
            <h4 className="vertical-timeline-element-subtitle">SMP</h4>
            <p>Juara 2 tim futsal tingkat SMP</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "rgb(180, 88, 7)", color: "#fff" }}
            icon={<FaBasketball />}
          >
            <h3 className="vertical-timeline-element-title">Basket Ball</h3>
            <h4 className="vertical-timeline-element-subtitle">SMA</h4>
            <p>
              Pernah Ikut Tanding Friendly Match tingkat junior karena disitu
              saya masih pemula dan juga saya tetap meneruskannya sampai
              sekarang
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
