import type { NextPage } from 'next';
import { useMetaData } from '../lib/hooks/useMetaData';
import Layout from '../components/Layout';
import Image from 'next/image';
import type { LanyardData, LanyardApiResponse } from '../lib/types';

const statuses = {
  offline:
    'https://cdn.discordapp.com/emojis/764904163422371860.webp?size=96&quality=lossless',
  idle: 'https://cdn.discordapp.com/emojis/764903512818712586.webp?size=96&quality=lossless',
  online:
    'https://cdn.discordapp.com/emojis/764903602312839188.webp?size=96&quality=lossless',
  dnd: 'https://cdn.discordapp.com/emojis/764903390966317106.webp?size=96&quality=lossless',
};

interface Props {
  data: LanyardData;
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      {useMetaData('Home', '/')}
      <Layout active='home'>
        <div className='container flex flex-col items-center text-center'>
          <section className='mb-5'>
            <div className='flex flex-row items-center'>
              <h1 className='font-bold text-3xl md:text-5xl mr-2'>
                Hey, I&apos;m <span className='h-text'>decc00n</span>
              </h1>
              {data && (
                <Image
                  src={statuses[data.discord_status]}
                  width={45}
                  height={45}
                  alt='logo'
                  title={data.discord_status}
                />
              )}
            </div>
            <p className='font-semibold mt-3 w-96 text-xl md:text-3xl'>
              Living in the illusion of fullstack development, looking into
              systems and networking.
            </p>
          </section>
          <section className='mb-5'>
            <h1 className='font-bold text-3xl md:text-5xl'>
              About <span className='h-text'> Me</span>
            </h1>
            <p className='font-semibold mt-3 w-96 text-xl md:text-3xl'>
              I have the worst github commit history.
            </p>
          </section>
          <section>
            <h1 className='font-bold text-3xl md:text-5xl'>
              <span className='h-text'>Technologies </span> I use
            </h1>
            <p className='font-semibold mt-3 w-96 text-xl md:text-3xl'>
              React, NextJS, MongoDB, TailwindCss, Figma, Spline, C, Lua
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.lanyard.rest/v1/users/589044704708919316',
  );

  const data = (await res.json()) as LanyardApiResponse;

  data.data.activities.splice(0, 1);

  console.log(data.data);

  return {
    props: {
      data: data.data as LanyardData,
    },
  };
};

export default Home;
