import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

import { projects } from '../lib/Storage/projects';
import { useMetaData } from '../lib/hooks/useMetaData';

const Projects: NextPage = () => {
  return (
    <>
      {useMetaData('Projects', '/projects', 'My projects.')}
      <Layout active='projects'>
        <div className='container'>
          <h1 className='font-bold text-5xl'>
            My <span className='h-text'> Projects</span>
          </h1>
          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                name={project.name}
                description={project.description}
                url={project.url}
                status={project.status}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Projects;
