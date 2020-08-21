import { concatClass } from 'bluelib';
import style from './IconUl.less';

export default function(props) {
	return (
		<ul class={concatClass(style.iconul, props.class)}>
			{props.children}
		</ul>
	)
}