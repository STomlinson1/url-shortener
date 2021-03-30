import s from './Button.module.scss';

interface ButtonProps {
	text: string;
	variant: 'primary' | 'secondary';
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
	if (onClick) {
		return (
			<button onClick={onClick} className={`${s.button} ${s[variant]}`}>
				{text}
			</button>
		);
	}

	return <button className={`${s.button} ${s[variant]}`}>{text}</button>;
};

export default Button;
