import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import style from './No.less';

export default function (props) {
	return (
		<span class={style.no}><FontAwesomeIcon icon={faCross}/> {props.children}</span>
	);
}
