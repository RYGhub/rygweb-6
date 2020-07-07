import style from './SteamMini.less';
import Mini from './Mini';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


export default function (props) {
	return (
		<Mini class={style.steam}>
			<div class={style.title}>
				Steam
			</div>
			<div class={style.name}>
				<a href={props.data.profile_url}>
					<div className={style.avatarframe}>
						<img className={style.avatar} src={props.data.avatar} alt={""}/>
					</div>
					&nbsp;{props.data.persona_name}
				</a>
			</div>
			<div class={style.accountcreationdate}>
				<div class={style.caption}>
					Account creato il
				</div>
				<div class={style.value}>
					<time dateTime={new Date(props.data.account_creation_date).toISOString()}>
						{new Date(props.data.account_creation_date).toLocaleDateString()}
					</time>
				</div>
			</div>
			<div class={style.buttons}>
				<a href={`steam://friends/add/${props.data.steamid}`}>
					<div class={style.button}>
						<div class={style.buttoncontent}>
							<FontAwesomeIcon icon={faUserPlus}/>
						</div>
					</div>
				</a>
			</div>
		</Mini>
	);
}
