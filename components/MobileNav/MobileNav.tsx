import s from './MobileNav.module.scss';

import Link from 'next/link';
import Button from '../Button/Button';

interface MobileNavProps {
	open?: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ open }) => {
	return (
		<nav className={`${s.mobileNav} ${open && s.open}`}>
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
				<li>
					<Link href="/">
						<a>Login</a>
					</Link>
				</li>
				<div className={s.btnContainer}>
					<Button text="Sign Up" variant="primary" />
				</div>
			</ul>
		</nav>
	);
};

export default MobileNav;
