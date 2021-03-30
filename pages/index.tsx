import { Fragment } from 'react';
import Head from 'next/head';

import { Hero } from '../components';

const Home: React.FC = () => {
	return (
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Web site created using create-next-app" />
				<title>Shortly</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
		</Fragment>
	);
};

export default Home;
