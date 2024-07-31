import { FC, ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
	children: ReactNode;
	active?: 'home' | 'projects' | 'contact' | 'social';
}

const Layout: FC<Props> = ({ children, active }) => {
	return (
		<div className='flex flex-col h-screen'>
			<Navbar active={active} />
			<main className='flex-grow'>{children}</main>
		</div>
	);
};

export default Layout;
