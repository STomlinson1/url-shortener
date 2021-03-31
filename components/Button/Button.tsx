import s from './Button.module.scss';

interface ButtonProps {
	text: string;
	variant: 'primary' | 'secondary';
	boxed?: boolean;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant, onClick, boxed }) => {
	if (onClick) {
		return (
			<button
				onClick={onClick}
				className={`${s.button} ${s[variant]} ${boxed ? s['boxed'] : ''}`}
			>
				{text}
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
