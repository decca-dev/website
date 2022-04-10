import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout
      active="about"
      title="About"
      description="Find more about me!"
      href="/about"
    >
      <div className="container">
        <h1 className="font-bold text-5xl">
          About <span className="h-text"> Me</span>
        </h1>
        <h2 className="font-semibold mt-5 mb-5 w-72 text-3xl">
          I am a self-taught developer learning new things everyday. I like
          helping other developers and contributing to open source projects.
        </h2>
        <h1 className="font-bold text-5xl">
          <span className="h-text">Technologies </span> I use
        </h1>
        <h2 className="font-semibold mt-5 mb-5 w-96 text-3xl">
          HTML, CSS, Javascript, Typescript, Lua, ReactJS, NextJS, EJS,
          ExpressJS, MongoDB, Discord.JS, TailwindCSS, SemanticUI, Figma,
          Spline.
        </h2>
      </div>
    </Layout>
  );
};

export default About;
