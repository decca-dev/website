import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

interface NavLinkOptions {
  title: string;
  href: string;
  active?: string;
}

interface Props {
  active?: string;
}

const Navbar: FC<Props> = ({ active }) => {
  return (
    <nav className='p-3 flex flex-row items-center justify-around'>
      <Image
        src={'/assets/logo.png'}
        width={50}
        height={58}
        alt='logo'
      />
      <div className='mr-7 flex flex-row items-center space-x-3 sm:space-x-6'>
        <NavLink
          title='Home'
          href='/'
          active={active}
        />
        <NavLink
          title='Projects'
          href='/projects'
          active={active}
        />
        <NavLink
          title='Contact'
          href='/contact'
          active={active}
        />
      </div>
    </nav>
  );
};

const NavLink = ({ title, href, active }: NavLinkOptions) => {
  return (
    <h1
      className={`text-xl font-semibold
				${active === title.toLowerCase() ? 'text-white' : 'text-gray-400'}
			`}
    >
      <Link href={href}>{title}</Link>
    </h1>
  );
};

export default Navbar;
