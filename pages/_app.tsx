import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageWithTransition from '../components/Transition';

export default function App(props: AppProps) {
	return (
		<>
			<PageWithTransition {...props} />
		</>
	);
}
