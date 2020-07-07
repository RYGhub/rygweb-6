import style from './SteamMini.less';
import Mini from './Mini';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from '../Dynamic/Link';


export default function (props) {

	return (
		<Mini class={style.steam}>
			<div class={style.sectionName}>
				<Link icon={false} class={style.contents} href={props.data.profile_url}>
					<span class={style.frame}>
						<img class={style.avatar} src={props.data.avatar} alt={""}/>
					</span>
					&nbsp;
					{props.data.persona_name}
				</Link>
			</div>
			<div class={style.sectionAccCreation}>
				<div class={style.caption}>
					Account creato il
				</div>
				<div class={style.value}>
					<time dateTime={new Date(props.data.account_creation_date).toISOString()}>
						{new Date(props.data.account_creation_date).toLocaleDateString()}
					</time>
				</div>
			</div>
			<div class={style.sectionButtons}>
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
