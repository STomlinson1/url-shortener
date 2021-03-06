import { useState, useRef } from 'react';

import s from './Links.module.scss';

import Button from '../Button/Button';

import { ApiData } from '../../types';

interface LinksProps {
	links: ApiData[];
}

interface LinkProps {
	link: ApiData;
}

const Link: React.FC<LinkProps> = ({ link }) => {
	const [ copied, setCopied ] = useState(false);

	const copyToClipBoard = () => {
		navigator.clipboard.writeText(link.result.full_short_link);
		setCopied(true);
	};

	return (
		<li className={s.link}>
			<p className={s.original}>{link.result.original_link}</p>
			<div className={s.group}>
				<a target="_blank" href={link.result.full_short_link}>
					<p>{link.result.full_short_link}</p>
				</a>
				<div className={s.btnContainer}>
					<Button
						text={copied ? 'Copied!' : 'Copy'}
						variant={copied ? 'secondary' : 'primary'}
						boxed
						onClick={copyToClipBoard}
					/>
				</div>
			</div>
		</li>
	);
};

const Links: React.FC<LinksProps> = ({ links }) => {
	return (
		<ul className={s.links}>
			{links.map((link) => <Link link={link} key={link.result.code} />)}
		</ul>
	);
};

export default Links;
