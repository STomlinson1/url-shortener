import { Fragment } from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
	return (
		<Fragment>
			<Head>
				<title>Shortly</title>
				{/* TODO: Add meta data */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</Fragment>
	);
};

export default Home;
