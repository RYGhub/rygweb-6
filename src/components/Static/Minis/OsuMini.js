import style from './OsuMini.less';
import Mini from './Mini';
import Link from '../../Dynamic/Link';
import { Fragment } from 'preact';
import { concatClass } from 'bluelib';


export default function (props) {

	const header = (
		<Link icon={false} class={style.header} href={`https://osu.ppy.sh/users/${props.osu.osu_id}`}>
			<img className={style.avatar}
				 src={props.osu.avatar_url && props.osu.avatar_url !== "/images/layout/avatar-guest.png" ? props.osu.avatar_url : "https://osu.ppy.sh/images/layout/avatar-guest.png"}
				 alt={""}/>
			&nbsp;
			{props.osu.username}
		</Link>
	);

	function createGameMode(name) {
		let gm = props.osu[name];

		let difficulty;

		if(name === "standard") {
			if(gm.pp >= 5000) {
				difficulty = "expert-plus";
			}
			else if(gm.pp >= 2000) {
				difficulty = "expert";
			}
			else if(gm.pp >= 900) {
				difficulty = "insane";
			}
			else if(gm.pp >= 300) {
				difficulty = "hard";
			}
			else if(gm.pp >= 50) {
				difficulty = "normal";
			}
			else if(gm.pp > 0) {
				difficulty = "easy";
			}
			else {
				difficulty = "none";
			}
		}
		else if(name === "taiko") {
			if(gm.pp >= 10000) {
				difficulty = "expert-plus";
			}
			else if(gm.pp >= 8000) {
				difficulty = "expert";
			}
			else if(gm.pp >= 4000) {
				difficulty = "insane";
			}
			else if(gm.pp >= 1500) {
				difficulty = "hard";
			}
			else if(gm.pp >= 500) {
				difficulty = "normal";
			}
			else if(gm.pp > 0) {
				difficulty = "easy";
			}
			else {
				difficulty = "none";
			}
		}
		else if(name === "catch") {
			if(gm.pp >= 3600) {
				difficulty = "expert-plus";
			}
			else if(gm.pp >= 1800) {
				difficulty = "expert";
			}
			else if(gm.pp >= 700) {
				difficulty = "insane";
			}
			else if(gm.pp >= 450) {
				difficulty = "hard";
			}
			else if(gm.pp >= 150) {
				difficulty = "normal";
			}
			else if(gm.pp > 0) {
				difficulty = "easy";
			}
			else {
				difficulty = "none";
			}
		}
		else if(name === "mania") {
			if(gm.pp >= 6500) {
				difficulty = "expert-plus";
			}
			else if(gm.pp >= 3600) {
				difficulty = "expert";
			}
			else if(gm.pp >= 1800) {
				difficulty = "insane";
			}
			else if(gm.pp >= 600) {
				difficulty = "hard";
			}
			else if(gm.pp >= 200) {
				difficulty = "normal";
			}
			else if(gm.pp > 0) {
				difficulty = "easy";
			}
			else {
				difficulty = "none";
			}
		}

		return (
			<div className={concatClass(style.gamemode, style[name], style[difficulty])}>
				<div className={style.gmicon}>
					<span className={style.fae}/>
				</div>
				<div class={style.performance}>
					{Math.floor(props.osu[name].pp)}
				</div>
				<div class={style.pp}>
					pp
				</div>
			</div>
		)
	}

	const body = (
		<Fragment>
			{createGameMode("standard")}
			{createGameMode("taiko")}
			{createGameMode("catch")}
			{createGameMode("mania")}
		</Fragment>
	);

	const icon = (
		<img class={style.icon} src={"https://raw.githubusercontent.com/ppy/osu-resources/master/osu.Game.Resources/Textures/Menu/logo.png"} alt={""} title={"osu!"}/>
	);

	return (
		<Mini class={style.mini} header={header} body={body} user={props.user} icon={icon}/>
	);
}
