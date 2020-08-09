import style from "./Masonry.css";

export default function(props) {
	return (
		<div class={style.masonry}>{props.children}</div>
	)
}