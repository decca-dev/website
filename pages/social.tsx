import type { NextPage } from 'next';
import Layout from '../components/Layout';
import SocialCard, { Social } from '../components/SocialCard';

const socials: Social[] = [
	{
		image:
			'https://cdn.discordapp.com/attachments/801556899606691851/1065950513679581234/25231.png',
		platform: 'Github',
		name: '@decca-dev',
		href: 'https://github.com/decca-dev',
	},
	{
		image:
			'https://cdn.discordapp.com/attachments/801556899606691851/1065950587423817758/youtube-play-red-logo-png-transparent-background-6.png',
		platform: 'Youtube',
		name: 'decc00n',
		href: 'https://www.youtube.com/channel/UCf3Qojc-sQYIQ-6R1PUmitg',
	},
];

const Social: NextPage = () => {
	return (
		<Layout
			active="social"
			title="Social"
			description="Checkout my socials!"
			href="/social"
		>
			<div className="container">
				<h1 className="font-bold text-5xl">
					My <span className="h-text"> Socials</span>
				</h1>
				{socials.map((social, i) => {
					return (
						<SocialCard
							platform={social.platform}
							name={social.name}
							image={social.image}
							href={social.href}
							key={i}
						/>
					);
				})}
			</div>
		</Layout>
	);
};

export default Social;
