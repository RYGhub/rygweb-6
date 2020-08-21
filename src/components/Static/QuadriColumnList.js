import style from './QuadriColumnList.less';

export default function (props) {
	return (
		<ul class={style.quadricolumnlist}>
			{props.children}
		</ul>
	);
}
