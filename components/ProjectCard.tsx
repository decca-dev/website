import { ProjectInterface } from '../lib/types';
import Image from 'next/image';

const ProjectCard = ({ name, description, href, status }: ProjectInterface) => {
	return (
		<div
			className=" w-fit rounded-3xl mt-8 cursor-pointer p-2 bg-gradient-to-r from-cyan-900 to-violet-600 hover:scale-110 transition-all duration-500 ease-out"
			onClick={() => (window.location.href = href)}
		>
			<div className="flex flex-row items-center">
				<div className="w-10 h-10 rounded-full bg-gray-500 text-center font-bold text-3xl">
					{name[0]}
				</div>
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
