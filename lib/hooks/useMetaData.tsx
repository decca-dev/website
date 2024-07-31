import Head from 'next/head';

export const useMetaData = (
	title: string,
	url: string,
	description = "Hello, I'm decc00n. Welcome to my website!",
) => {
	return (
		<Head>
			<title>{`decc00n | ${title}`}</title>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta
				name='description'
				content={description}
			/>
			<link
				rel='shortcut icon'
				href='/assets/logo.png'
				type='image/png'
			/>
			<meta
				property='og:title'
				content={`decc00n | ${title}`}
			/>
			<meta
				property='og:description'
				content={description}
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				property='og:url'
				content={process.env.NEXT_PUBLIC_URL + url}
			/>
			<meta
				property='og:image'
				content='/assets/logo.png'
			/>
			<meta
				name='keywords'
				color='decc00n, decca'
			/>
			<meta
				content='#A12C6B'
				data-react-helmet='true'
				name='theme-color'
			/>
		</Head>
	);
};
