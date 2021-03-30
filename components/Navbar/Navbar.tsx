import { useState } from 'react';
import Link from 'next/link';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

import s from './Navbar.module.scss';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Navbar: React.FC = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<nav className={`${s.navbar}`}>
			<div className="container-l flex-row">
				<Logo />
				<ul className={s.group}>
					<li>
						<Link href="/">
							<a>Features</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Pricing</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Resources</a>
						</Link>
					</li>
				</ul>
				<ul className={s.group}>
					<li>
						<Link href="/">
							<a>Login</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a className={s.btnContainer}>
								<Button text="Sign up" />
							</a>
						</Link>
					</li>
				</ul>
				<div className={s.navButtonContainer} onClick={() => setOpen(!open)}>
					{open ? <RiCloseLine /> : <RiMenu4Line />}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
