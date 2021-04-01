import s from './ContentSection.module.scss';

import Button from '../Button/Button';
import Card from '../Card/Card';
import { Fragment } from 'react';

const cardData = [
	{
		title: 'Brand Recognition',
		content:
			'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
		imgUrl: '/images/icon-brand-recognition.svg'
	},
	{
		title: 'Detailed Records',
		content:
			'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
		imgUrl: '/images/icon-detailed-records.svg'
	},
	{
		title: 'Fully Customizable',
		content:
			'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
		imgUrl: '/images/icon-fully-customizable.svg'
	}
];

const ContentSection: React.FC = () => {
	return (
		<section className={s.section}>
			<div className={`container-l ${s.flex}`}>
				<div className={s.searchContainer}>
					<div className={s.inputContainer}>
						<input
							className={s.input}
							type="text"
							placeholder="Shorten a link here..."
						/>
						<div className={s.buttonContainer}>
							<Button text="Shorten It!" variant="primary" boxed />
						</div>
					</div>
				</div>
				<h2 className={s.heading}>Advanced Statistics</h2>
				<p className={s.subtext}>
					Track how your links are performing across the web with our advanced
					statistics dashboard
				</p>
				<div className={s.cardContainer}>
					{cardData.map((card, idx) => {
						if (idx === cardData.length - 1) {
							return <Card key={card.title} {...card} />;
						}
						return (
							<Fragment key={card.title}>
								<Card {...card} />
								<div className={s.divider} />
							</Fragment>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ContentSection;
