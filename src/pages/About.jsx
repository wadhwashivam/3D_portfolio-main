import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Shivam
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Hi, I'm Shivam Wadhwa, a Computer Science student at the University of
          Prince Edward Island. I've honed my skills in Python, Java, database
          management, networking, and delved into the world of machine learning.
          I'm very passionate about exploring new technologies and fields in
          computer science, always eager to push the boundaries and embrace the
          latest innovations. As a quick learner, I thrive on the challenge of
          mastering new concepts and turning them into impactful projects. You
          can find some of my quality projects on my GitHub profile, showcasing
          my dedication to creating practical solutions and refining my skills.
          In recognition of my commitment to research and innovation, I'm proud
          to have won the 3rd prize in the Undergraduate Oral Presentation
          category at Science Atlantic 2023. It's a testament to my dedication
          to the field. Moreover, I'm particularly fascinated by the
          possibilities of quantum computing, an area where I'm looking forward
          to contributing and making breakthroughs. Currently, I'm specializing
          in Ubuntu Touch OS as part of my honors in operating systems. Join me
          on this exciting journey through the ever-evolving landscape of
          technology and computer science!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div> */}
      <hr className="border-slate-200" />
      <div>
        <p> </p>
      </div>

      <CTA />
    </section>
  );
};

export default About;
