import style from './MiniHolder.less';

export default function (props) {
	return (
		<div className={style.flex}>
			{props.children}
		</div>
	);
}
