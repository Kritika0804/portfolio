import React from "react";
import Title from "../Layouts/Title";

// import { bookez } from "../../assets/index";
import ProjectCard from "./ProjectCard";
import { bookez, bookmate, newweb } from "../../assets/index";

function Project() {
  return (
    <section
      id="projects"
      className="w-full h-[800px]  py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="BOOKEZ"
          des="The Hotel Booking Website is a web-based platform designed to simplify and streamline the process of reserving hotel rooms."
          src={bookez}
          link1="https://github.com/Kritika0804/bookez-mern"
          link2="https://github.com/Kritika0804/bookez-mern"
        />
        <ProjectCard
          title="Book Reselling Website"
          des="Book Reselling Website where it provides an platform to connect junios and seniors of the college to buy books and sell books."
          src={bookmate}
          link1="https://github.com/Kritika0804/Bookmate"
          link2="https://bookmate.vercel.app/"
        />
        <ProjectCard
          title="News Website"
          des="It is a website for showing daily news.It shows news of various categories by fetching data from json file format."
          src={newweb}
          link1="https://github.com/Kritika0804/news-website-react"
          link2="https://news-website-react-jet.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Project;
