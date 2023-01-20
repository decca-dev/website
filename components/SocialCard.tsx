import Image from 'next/image';

export interface Social {
	platform: string;
	image: string;
	name: string;
	href: string;
}

const SocialCard = ({ image, platform, name, href }: Social) => {
	return (
		<div
			className="p-3 bg-gradient-to-br from-slate-800 to-violet-600 rounded-3xl mt-8 cursor-pointer"
			onClick={() => (window.location.href = href)}
		>
			<div className="flex flex-row items-center">
				<Image
					src={image}
					width={70}
					height={70}
					alt="social"
				/>
				<div className="ml-5">
					<h1 className="font-bold text-white text-lg">{name}</h1>
					<h2 className="text-gray-300">{platform}</h2>
				</div>
			</div>
		</div>
	);
};

export default SocialCard;
