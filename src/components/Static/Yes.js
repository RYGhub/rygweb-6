import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import style from "./Yes.less";

export default function (props) {
	return (
		<span class={style.yes}><FontAwesomeIcon icon={faCheck}/> {props.children}</span>
	);
}
