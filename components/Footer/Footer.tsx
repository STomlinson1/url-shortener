import s from './Footer.module.scss';

import Logo from '../../public/images/logo-white.svg';
import Facebook from '../../public/images/icon-facebook.svg';
import Twitter from '../../public/images/icon-twitter.svg';
import Pinterest from '../../public/images/icon-pinterest.svg';
import Instagram from '../../public/images/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`${s.flex} container-l`}>
				<div className={s.logo}>
					<Logo />
				</div>
				<div className={s.linkContainer}>
					<ul>
						<li>Features</li>
						<li>Link Shortening</li>
						<li>Branded Links</li>
						<li>Analytics</li>
					</ul>
					<ul>
						<li>Resources</li>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
					<ul>
						<li>Company</li>
						<li>About</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className={s.social}>
					<Facebook />
					<Twitter />
					<Pinterest />
					<Instagram />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
