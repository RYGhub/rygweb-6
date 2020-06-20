import concatClass from '../../utils/concatClass';
import style from './Avatar.less';

export default function (props) {
	return (
		<img alt={""} src={props.src} class={concatClass(style.avatar, props.class)}/>
	);
}
