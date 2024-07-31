import { FC } from 'react';

export interface Social {
  platform: string;
  name: string;
  href: string;
}

const SocialCard: FC<Social> = ({ platform, name, href }) => {
  return (
    <div
      className='p-3 w-56 sm:w-96 bg-gradient-to-r from-cyan-900 to-violet-600 rounded-3xl mt-8 cursor-pointer'
      onClick={() => (window.location.href = href)}
    >
      <div className='flex flex-row items-center'>
        <div className='ml-5'>
          <h2 className='text-gray-300'>{platform}</h2>
          <h1 className='font-bold text-white text-md sm:text-lg'>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
