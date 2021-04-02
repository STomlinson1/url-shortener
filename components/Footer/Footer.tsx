import Link from 'next/link';

import s from './Footer.module.scss';

import Logo from '../../public/images/logo-white.svg';
import Facebook from '../../public/images/icon-facebook.svg';
import Twitter from '../../public/images/icon-twitter.svg';
import Pinterest from '../../public/images/icon-pinterest.svg';
import Instagram from '../../public/images/icon-instagram.svg';

import { linkGroups } from './data';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`${s.flex} container-l`}>
				<div className={s.logo}>
					<Logo />
				</div>
				<div className={s.linkContainer}>
					{linkGroups.map((links, idx) => {
						return (
							<ul key={idx} className={s.group}>
								{links.map((link) => (
									<Link href={link.href} key={link.text}>
										<a>{link.text}</a>
									</Link>
								))}
							</ul>
						);
					})}
				</div>
				<div className={s.social}>
					<Facebook />
					<Twitter />
					<Pinterest />
					<Instagram />
				</div>
			</div>
			<p className={`${s.signature} container-l`}>
				Copyright &copy; 2021, Developed by Stephon Tomlinson
			</p>
		</footer>
	);
};

export default Footer;
