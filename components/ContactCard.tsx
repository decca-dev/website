import Image from 'next/image';

export interface Contact {
	image: string;
	platform: string;
	adress: string;
	href: string;
}

const ContactCard = ({ image, platform, adress, href }: Contact) => {
	return (
		<div
			className="p-3 bg-gradient-to-l from-gray-800 to-indigo-800 rounded-3xl mt-8 cursor-pointer"
			onClick={() => (window.location.href = href)}
		>
			<div className="flex flex-row items-center">
				<Image
					src={image}
					width={70}
					height={70}
					alt="contact"
				/>
				<div className="ml-5">
					<h1 className="font-bold text-white text-lg">{platform}</h1>
					<h2 className="text-gray-300">{adress}</h2>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
