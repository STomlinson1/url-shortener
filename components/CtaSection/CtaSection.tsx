import s from './CtaSection.module.scss';

import Button from '../Button/Button';

const CtaSection = () => {
	return (
		<section className={s.cta}>
			<h2>Boost your links today</h2>
			<div className={s.buttonContainer}>
				<Button text="Get Started" variant="primary" />
			</div>
		</section>
	);
};

export default CtaSection;
