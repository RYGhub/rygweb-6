import style from "./NavbarDiv.less";
import { BaseLink } from 'bluelib';

export default function(props) {
	return (
		<BaseLink class={style.baselink} href={props.href} icon={false} disabled={props.disabled}>
			{props.children}
		</BaseLink>
	)
}