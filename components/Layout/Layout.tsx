import { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			{children}
			{/* Footer */}
		</Fragment>
	);
};

export default Layout;
