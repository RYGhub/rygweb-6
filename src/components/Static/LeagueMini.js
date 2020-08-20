import style from './LeagueMini.less';
import Mini from './Mini';
import Link from '../Dynamic/Link';
import { Fragment } from 'preact';
import { concatClass } from 'bluelib';


export default function (props) {

	let levelColor;
	let modulo = props.league.summoner_level % 100;
	if(props.league.summoner_level < 30) {
		levelColor = style.grey;
	}
	else if(modulo >= 0 && modulo < 25) {
		levelColor = style.white;
	}
	else if(modulo >= 25 && modulo < 50) {
		levelColor = style.green;
	}
	else if(modulo >= 50 && modulo < 75) {
		levelColor = style.blue;
	}
	else if(modulo >= 75) {
		levelColor = style.red;
	}

	const header = (
		<Link icon={false} class={style.header} href={`https://euw.op.gg/summoner/userName=${props.league.summoner_name}`}>
			<div class={concatClass(style.frame, levelColor)}>
				<img className={style.avatar}
					 src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${props.league.profile_icon_id}.png`}
					 alt={""}/>
			</div>
			&nbsp;
			{props.league.summoner_name}
		</Link>
	);

	const level = (
		<div className={style.level}>
			<span class={style.text}>
				Livello
			</span>
			<span class={style.value}>
				{props.league.summoner_level}
			</span>
		</div>
	);

	const soloq = (
		<div class={style.rank}>
			<img class={style.img} alt={""} src={`https://ryg.s3.fr-par.scw.cloud/resources/lol/Emblem_${props.league.soloq.tier}.png`}/>
			<div class={style.queue}>
				Solo/Duo
			</div>
			<div class={style.name}>
				{ props.league.soloq.wins !== null ? props.league.soloq.tier + " " + props.league.soloq.rank : "-" }
			</div>
		</div>
	);

	const flexq = (
		<div className={style.rank}>
			<img class={style.img} alt={""}
				 src={`https://ryg.s3.fr-par.scw.cloud/resources/lol/Emblem_${props.league.flexq.tier}.png`}/>
			<div className={style.queue}>
				Flex
			</div>
			<div className={style.name}>
				{ props.league.flexq.wins !== null ? props.league.flexq.tier + " " + props.league.flexq.rank : "-" }
			</div>
		</div>

	);

	const body = (
		<Fragment>
			{level}
			<div class={style.ranks}>
				{soloq}
				{flexq}
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"https://ryg.s3.fr-par.scw.cloud/resources/lol/icon.webp"} alt={""}/>
	);

	return (
		<Mini class={style.mini} header={header} body={body} user={props.user} icon={icon}/>
	);
}
