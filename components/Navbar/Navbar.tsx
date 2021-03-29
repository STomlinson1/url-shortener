import s from './Navbar.module.scss';

import Logo from '../Logo/Logo';

const Navbar: React.FC = () => {
	return (
		<nav className={`${s.navbar}`}>
			<div className="container-l flex-row">
				<Logo />
				<ul className={s.group}>
					<li>Features</li>
					<li>Pricing</li>
					<li>Resources</li>
				</ul>
				<ul className={s.group}>
					<li>login</li>
					<li>sign up</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
