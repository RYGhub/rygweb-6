import style from "./Header.less";
import { concatClass } from 'bluelib';


export default function (props) {
	return (
		<nav className={concatClass(style.navbar, props.class)}>
			<div className={style.left}>
				{props.left}
			</div>
			<div className={style.center}>
				{props.center}
			</div>
			<div className={style.right}>
				{props.right}
			</div>
		</nav>
	);
}
