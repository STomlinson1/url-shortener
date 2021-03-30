import s from './Navbar.module.scss';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Navbar: React.FC = () => {
	return (
		<nav className={`${s.navbar}`}>
			<div className="container-l flex-row">
				<Logo />
				<ul className={s.group}>
					<li>
						<a>Features</a>
					</li>
					<li>
						<a>Pricing</a>
					</li>
					<li>
						<a>Resources</a>
					</li>
				</ul>
				<ul className={s.group}>
					<li>
						<a>Login</a>
					</li>
					<li>
						<a className={s.btnContainer}>
							<Button text="Sign up" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
