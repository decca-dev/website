import { ProjectInterface } from "../lib/types";

const ProjectCard = ({
  name,
  description,
  image,
  href,
  status,
}: ProjectInterface) => {
  return (
    <div
      className="w-96 h-28 border-4 border-gray-400 rounded-3xl mt-8 cursor-pointer"
      onClick={() => (window.location.href = href)}
    >
      <div className="flex flex-row items-center">
        <img
          src={image}
          width={70}
          height={70}
          className="py-3 ml-4 rounded-md"
        />
        <div className="ml-5">
          <h1 className="font-bold text-white text-lg">{name}</h1>
          <h2 className="text-gray-300">{description}</h2>
          <h3 className="text-gray-400">Status - {status}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
