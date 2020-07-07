import style from './SteamMini.less';
import Mini from './Mini';
import { Todo } from 'bluelib';


export default function (props) {
	return (
		<Mini class={style.steam}>
			<h4>Steam</h4>
			<a href={props.data.profile_url}>
				<div className={style.avatarframe}>
					<img className={style.avatar} src={props.data.avatar} alt={""}/>
				</div>
				&nbsp;{props.data.persona_name}
			</a>
			&nbsp;<Todo>TODO: finiscimi</Todo>
		</Mini>
	);
}
