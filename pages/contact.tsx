import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ContactCard, { Contact } from '../components/ContactCard';

const contacts: Contact[] = [
	{
		image:
			'https://cdn.discordapp.com/attachments/801556899606691851/1065950087685095434/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
		platform: 'Discord',
		adress: 'decc00n#6684',
		href: 'https://discord.com/users/589044704708919316',
	},
	{
		image:
			'https://cdn.discordapp.com/attachments/801556899606691851/1065950281965248512/gmail-email-logo-png-16.png',
		platform: 'Email',
		adress: 'decc00ndev@gmail.com',
		href: 'mailto:decc00ndev@gmail.com',
	},
];

const Contact: NextPage = () => {
	return (
		<Layout
			active="contact"
			title="Contact"
			description="Find out where to contact me!"
			href="/contact"
		>
			<div className="container">
				<h1 className="font-bold text-5xl">
					Contact <span className="h-text"> Me</span>
				</h1>
				{contacts.map((contact, i) => {
					return (
						<ContactCard
							platform={contact.platform}
							adress={contact.adress}
							href={contact.href}
							image={contact.image}
							key={i}
						/>
					);
				})}
			</div>
		</Layout>
	);
};

export default Contact;
