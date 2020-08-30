import style from './SteamMini.less';
import Mini from './Mini';
import Link from '../../Dynamic/Link';
import { Fragment } from 'preact';
import { concatClass } from 'bluelib';


export default function (props) {

	const header = (
		<Link icon={false} class={style.header} href={props.steam.profile_url}>
			<span class={style.frame}>
				<img class={style.avatar} src={props.steam.avatar} alt={""}/>
			</span>
			<span class={style.personaName}>
				{props.steam.persona_name}
			</span>
		</Link>
	);

	const body = (
		<Fragment>
			<div className={style.keyvalue}>
				<div className={style.caption}>
					Livello
				</div>
				<div className={style.value}>
					{props.steam.account_level}
				</div>
			</div>
			<div className={style.keyvalue}>
				<div className={style.caption}>
					Giochi posseduti
				</div>
				<div className={style.value}>
					{props.steam.owned_games_count}
				</div>
			</div>
			<div className={concatClass(style.keyvalue, style.bottom)}>
				<div className={style.caption}>
					Più giocato (2 sett.)
				</div>
				<div className={style.value}>
					<a href={`https://store.steampowered.com/app/${props.steam.most_played_game_2weeks}/`}>
						<img class={style.mostplayed} src={`https://steamcdn-a.akamaihd.net/steam/apps/${props.steam.most_played_game_2weeks}/header.jpg`} alt={""}/>
					</a>
				</div>
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"https://ryg.s3.fr-par.scw.cloud/resources/steam/steam.svg"} alt={""} title={"Steam"}/>
	);

	return (
		<Mini class={style.steam} header={header} body={body} user={props.user} icon={icon}/>
	);
}
