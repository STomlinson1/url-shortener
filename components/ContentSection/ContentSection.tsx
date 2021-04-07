import { useState, Fragment } from 'react';

import ShrtcodeService from '../../services/shrtcode';
import s from './ContentSection.module.scss';

import Button from '../Button/Button';
import Card from '../Card/Card';
import Links from '../Links/Links';

import { cardData } from './data';
import { ApiData } from '../../types';

const ContentSection: React.FC = () => {
	const [ url, setUrl ] = useState('');
	const [ links, setLinks ] = useState<ApiData[]>([]);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const shortenUrl = async () => {
		try {
			setError(false);
			setLoading(true);

			const data = await ShrtcodeService.create(url);

			setLoading(false);
			setUrl('');

			const updatedLinks = links.filter((link, idx) => idx < 3);

			setLinks([ data, ...updatedLinks ]);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	};

	return (
		<section className={s.section}>
			<div className={`container-l ${s.flex}`}>
				<div className={s.searchContainer}>
					<div className={s.inputContainer}>
						<div className={s.inputWrapper}>
							<input
								className={`${s.input} ${error ? s.error : ''}`}
								type="text"
								placeholder="Shorten a link here..."
								value={url}
								onChange={(e) => setUrl(e.target.value)}
							/>
							{error && (
								<span className={s.errorMessage}>Please add a valid link</span>
							)}
						</div>
						<div className={s.buttonContainer}>
							<Button
								text="Shorten It!"
								variant="primary"
								boxed
								onClick={shortenUrl}
								loading={loading}
							/>
						</div>
					</div>
				</div>
				<Links links={links} />

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
