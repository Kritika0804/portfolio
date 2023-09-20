import React from "react";
import Title from "../Layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaBars, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

import { SiProgress } from "react-icons/si";
import { education, experience } from "../../assets/index";
import timeline from "./Timeline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { red } from "@mui/material/colors";

function Features() {
  return (
    <section
      id="experience"
      className="w-full h-[1500px]  py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Experience" />
      </div>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaLaptopCode />}
          date="Mar 2023 - Jun 2023"
        >
          <p className="text-black">Full Stack Web Developer</p>
          <h3 className="text-black">Secured Suit</h3>
          <p className="text-black">
            React Js | Firebase | Material UI | Wordpress
          </p>
          <h3 className="text-black">
            • Developed highly interactive, scalable and responsive React
            components, using styled-systems, polished and custom hooks to
            create seamless UI experiences
            <br />
            • Worked on react js in the Front end and firebase for the backend.
            <br />• Worked on blogging and news website made using WordPress.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaLaptopCode />}
          date="Oct 2022 - Dec 2022"
        >
          <p className="text-black">Research and Development Intern</p>
          <h3 className="text-black">DRDO</h3>
          <p className="text-black">Python | Machine Learning</p>
          <h3 className="text-black">
            • Researched on how object detection systems and AR/VR Technology
            can be used in defense systems and studied various algorithms which
            can be used in real-time.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaGraduationCap />}
          date="2020 - 2024"
        >
          <p className="text-black">D.Y. Patil College of Engineering,Pune</p>
          <h3 className="text-black">Computer Science</h3>
          <p className="text-black">CGPA : 9.3</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaGraduationCap />}
          date="2018 - 2020"
        >
          <p className="text-black">Narayana Junior College, Hyderabad</p>
          <h3 className="text-black">Secondary Education</h3>
          <p className="text-black">Percentage : 94.5%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaGraduationCap />}
          date="2017 - 2018"
        >
          <p className="text-black">KSCHS</p>
          <h3 className="text-black">Primary Education</h3>
          <p className="text-black">Percentage : 94.08%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Features;
