import style from "./Header.less";


export default function (props) {
	return (
		<nav className={style.navbar}>
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
