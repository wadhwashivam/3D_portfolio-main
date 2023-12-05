import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Shivam</span>
        👋
        <br />
        4th-year Computer Science student exploring <br />the world of operating
        systems through research.<br /> Welcome to my journey!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Developed skills through academic <br /> projects and research during
          university studies.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led successful multilingual full-stack projects in Java and Python,
          including database management and web development.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          For hiring or project inquiries, feel free to reach out.
          <br /> Let's connect and discuss opportunities!
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
