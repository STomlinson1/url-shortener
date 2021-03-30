import s from './ContentSection.module.scss';

import Button from '../Button/Button';

const ContentSection: React.FC = () => {
	return (
		<section className={s.section}>
			<div className={`container-l ${s.flex}`}>
				<div className={s.searchContainer}>
					<div className={s.inputContainer}>
						<input className={s.input} type="text" />
						<div className={s.buttonContainer}>
							<Button text="Shorten It!" variant="primary" />
						</div>
					</div>
				</div>
				<h2 className={s.heading}>Advanced Statistics</h2>
				<p className={s.subtext}>
					Track how your links are performing across the web with our advanced
					statistics dashboard
				</p>
				<div className={s.cardContainer}>Cards</div>
			</div>
		</section>
	);
};

export default ContentSection;
