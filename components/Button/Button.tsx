import s from './Button.module.scss';

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	console.log(onClick);

	return <button className={`${s.button} ${s.primary}`}>{text}</button>;
};

export default Button;
