import { concatClass } from 'bluelib';
import style from "./Link.less";
import { useContext } from 'preact/hooks';
import CurrentPage from '../../../contexts/CurrentPage';

export default function (props) {
	const currentPage = useContext(CurrentPage);

	if(props.href === "#")
	{
		return (
			<span className={concatClass(style.link, style.disabled, props.class)}>{props.children}</span>
		);
	}
	else if(props.href === currentPage) {
		return (
			<span className={concatClass(style.link, style.current, props.class)}>{props.children}</span>
		);
	}

	return (
		<a className={concatClass(style.link, style.clickable, props.class)} href={props.href}>{props.children}</a>
	);
}
