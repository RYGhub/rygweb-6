import style from "./Header.less";


export default function (props) {
	return (
		<img src={props.src} alt={props.alt} class={style.icon}/>
	);
}
