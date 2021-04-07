import s from './Button.module.scss';

import HashLoader from 'react-spinners/HashLoader';
interface ButtonProps {
	text: string;
	variant: 'primary' | 'secondary';
	boxed?: boolean;
	onClick?: () => void;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	text,
	variant,
	onClick,
	boxed,
	loading
}) => {
	if (onClick) {
		return (
			<button
				onClick={onClick}
				className={`${s.button} ${s[variant]} ${boxed ? s['boxed'] : ''}`}
				disabled={loading}
			>
				{loading ? <HashLoader color="#fff" size={30} /> : <span>{text}</span>}
			</button>
		);
	}

	return (
		<button className={`${s.button} ${s[variant]} ${boxed ? s['boxed'] : ''}`}>
			{text}
		</button>
	);
};

export default Button;
