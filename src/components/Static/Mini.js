import style from './Mini.less';
import { concatClass, LeftRight } from 'bluelib';
import StaticUserLink from './StaticUserLink';


export default function (props) {
	return (
		<div class={concatClass(style.mini, props.class)}>
			<div class={style.top}>
				<div>
					<StaticUserLink data={props.user} class={style.user}>{props.user.username}</StaticUserLink>
				</div>
				<div class={style.icon}>
					{props.icon}
				</div>
			</div>
			<div class={style.header}>
				{props.header}
			</div>
			<div class={style.body}>
				{props.body}
			</div>
		</div>
	);
}
