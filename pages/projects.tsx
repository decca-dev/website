import type { NextPage } from "next";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { ProjectInterface } from "../lib/types";
import { useState, useEffect } from "react";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    fetch('/api/projects').then(async (res) => {
      const data = await res.json();
      setProjects(data.data)
    })
  }, [])

  return (
    <Layout
      active="projects"
      title="Projects"
      description="Checkout my projects!"
      href="/projects"
    >
      <div className="container">
        <h1 className="font-bold text-5xl">
          My <span className="h-text"> Projects</span>
        </h1>
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              name={project.name}
              description={project.description}
              image={project.image}
              href={project.href}
              status={project.status}
            />
          );
        })}
      </div>
    </Layout>
  );
};

// export const getStaticProps = async (context: NextPageContext) => {
//   const protocol = context.req?.headers["x-forwarded-proto"] || "http";
//   const baseUrl = context.req
//     ? `${protocol}://${context.req.headers.host}`
//     : "";
//   const res = await fetch(`http://localhost:3000/api/projects`, {
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "User-Agent": "*",
//     },
//   });

//   const data = await res.json();

//   return {
//     props: {
//       projects: data.data,
//     },
//   };
// };

export default Projects;
