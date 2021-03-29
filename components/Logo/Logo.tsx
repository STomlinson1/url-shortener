import s from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={s.logo}>
			<img src="/images/logo.svg" alt="Shortly Logo" />
		</div>
	);
};

export default Logo;
