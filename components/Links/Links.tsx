import s from './Links.module.scss';

import Button from '../Button/Button';

import { ApiData } from '../../types';

interface LinksProps {
	links: ApiData[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
	return (
		<ul className={s.links}>
			{links.map((link) => (
				<li className={s.link} key={link.result.code}>
					<p className={s.original}>{link.result.original_link}</p>
					<div className={s.group}>
						<a target="_blank" href={link.result.full_short_link}>
							<p>{link.result.full_short_link}</p>
						</a>
						<div className={s.btnContainer}>
							<Button text="Copy" variant="primary" boxed />
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Links;
