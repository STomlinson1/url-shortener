import Link from 'next/link';
import s from './Hero.module.scss';

import Button from '../Button/Button';

const Hero = () => {
	return (
		<header className={s.hero}>
			<div className={`container-l ${s.flex}`}>
				<div className={s.content}>
					<h1>More than just shorter links</h1>
					<p>
						Build your brands's recognition and get detailed insights on how your
						links are performing{' '}
					</p>
					<Link href="/">
						<a className={s.buttonContainer}>
							<Button text="Get Started" variant="primary" />
						</a>
					</Link>
				</div>
				<div className={s.imgContainer}>
					<img src="/images/illustration-working.svg" alt="person at desktop" />
				</div>
			</div>
		</header>
	);
};

export default Hero;
