import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

function Bannerleft() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Competitive Programmer"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-[#ff014f] capitalize">Kritika Choudhary</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorStyle="|"
            cursorBlinking="false"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide">
          I am a full stack developer and competitive programmer with expertise
          in Java, C++,HTML, CSS, JavaScript, React.js, and Node.js. I have
          strong problem-solving abilities, excellent communication, and a
          passion for learning. My achievements include participation in coding
          competitions, completion of industry certifications, and a good
          academic record in computer engineering.
        </p>
      </div>
      <div className="mx-4">
        {/* <button className="btn primary-btn b-btn mx-4"> Hire me </button> */}
        <a href="KritikaChoudhary_resume.pdf" download="Kritika Choudhary.pdf">
          <button className="btn  b-btn ">Get Resume</button>
        </a>
      </div>
      <div>
        {/* <h2 className='text-base uppercase
             font-titleFont mb-4'>Find me in</h2> */}
        <div className="flex gap-4">
          <span className="bannerIcon">
            <VscGithubAlt />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Bannerleft;
