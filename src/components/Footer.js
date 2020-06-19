import style from './Footer.less';


export default function(props) {
	return (
		<div class={style.footer}>
			{props.children}
		</div>
	);
}
