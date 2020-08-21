import style from './Navbar.less';
import { concatClass } from 'bluelib';


export default function (props) {
	return (
		<nav class={concatClass(style.navbar, props.class)}>
			{props.children}
		</nav>
	);
}
