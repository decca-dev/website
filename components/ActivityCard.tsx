import Image from 'next/image';

interface Activity {
	name: string;
	details?: string;
}

const ActivityCard = ({ name, details }: Activity) => {
	return (
		<div className="p-2 rounded-3xl mt-8 bg-gradient-to-r from-gray-700 to-sky-800 hover:scale-90 transition-all duration-500 ease-out">
			<div className="flex flex-row items-center">
				<div className="py-3 ml-4">
					<Image
						src={
							name === 'Visual Studio Code'
								? 'https://cdn.discordapp.com/attachments/801556899606691851/1065943373938172056/512px-Visual_Studio_Code_1.png'
								: '/assets/logo.png'
						}
						width={70}
						height={70}
						alt="activity"
					/>
				</div>
				<div className="ml-5 font-semibold">
					<h1>{name}</h1>
					<h2>
						{name === 'Visual Studio Code'
							? 'Editing ' + details
							: details || ''}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default ActivityCard;
