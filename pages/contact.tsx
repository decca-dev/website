import type { NextPage } from 'next';
import Layout from '../components/Layout';
import SocialCard, { Social } from '../components/SocialCard';

import { useMetaData } from '../lib/hooks/useMetaData';

const contacts: Social[] = [
  {
    platform: 'Discord',
    name: 'decc00n',
    href: 'https://discord.com/users/589044704708919316',
  },
  {
    platform: 'Email',
    name: 'decc00ndev@gmail.com',
    href: 'mailto:decc00ndev@gmail.com',
  },
];

const socials: Social[] = [
  {
    platform: 'Github',
    name: '@decca-dev',
    href: 'https://github.com/decca-dev',
  },
];

const Contact: NextPage = () => {
  return (
    <>
      {useMetaData('Contact', '/contact', 'Contact me.')}
      <Layout active='contact'>
        <div className='container'>
          <div>
            <h1 className='font-bold text-5xl'>
              Contact <span className='h-text'> Me</span>
            </h1>
            {contacts.map((contact, i) => {
              return (
                <SocialCard
                  platform={contact.platform}
                  name={contact.name}
                  href={contact.href}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className='container'>
          <div className='mb-10'>
            <h1 className='font-bold text-5xl'>
              Find <span className='h-text'> Me</span>
            </h1>
            {socials.map((contact, i) => {
              return (
                <SocialCard
                  platform={contact.platform}
                  name={contact.name}
                  href={contact.href}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
