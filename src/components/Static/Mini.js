import style from './Mini.less';
import { concatClass } from 'bluelib';


export default function (props) {
	return (
		<div class={concatClass(style.mini, props.class)}>
			{props.children}
		</div>
	);
}
