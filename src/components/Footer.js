import style from './Footer.less';
import concatClass from '../utils/concatClass';


export default function(props) {
	return (
		<div class={concatClass(style.footer, props.class)}>
			{props.children}
		</div>
	);
}
