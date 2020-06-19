import style from "./Header.less";
import concatClass from '../utils/concatClass';


export default function (props) {
	return (
		<img src={props.src} alt={props.alt} class={concatClass(style.icon, props.class)}/>
	);
}
