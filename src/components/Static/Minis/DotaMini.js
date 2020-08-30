import style from './DotaMini.less';
import Mini from './Mini';
import Link from '../../Dynamic/Link';
import { Fragment } from 'preact';


export default function (props) {

	let medal = `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png`;
	let stars = "";
	let text = "Unranked";
	if(props.steam.dota.rank) {
		medal = `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${Math.floor(props.steam.dota.rank.raw / 10)}.png`;
		stars = `https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${props.steam.dota.rank.raw % 10}.png`;
		text = `${props.steam.dota.rank.medal.toLowerCase()} ${props.steam.dota.rank.rank}`
	}

	let rank;
	if(props.steam.dota.rank) {
		rank = (
			<Fragment>
				<div className={style.name}>
					{`${props.steam.dota.rank.medal.toLowerCase()} ${props.steam.dota.rank.rank}`}
				</div>
				<div className={style.fullMedal}>
					<img className={style.medal}
						 alt={""}
						 src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${Math.floor(props.steam.dota.rank.raw / 10)}.png`}/>
					<img className={style.stars}
						 alt={""}
						 src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${props.steam.dota.rank.raw % 10}.png`}/>
				</div>
			</Fragment>
		);
	}
	else {
		rank = (
			<Fragment>
				<div className={style.name}>
					{text}
				</div>
				<div className={style.fullMedal}>
					<img className={style.medal}
						 alt={""}
						 src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png`}/>
				</div>
			</Fragment>
		);
	}


	const header = (
		<Link icon={false} class={style.header} href={`https://www.opendota.com/players/${props.steam.steamid32}`}>
			<img class={style.avatar} src={props.steam.avatar} alt={""}/>
			&nbsp;
			{props.steam.persona_name}
		</Link>
	);

	const body = (
		<Fragment>
			<div className={style.wl}>
				<div className={style.wins}>
					{props.steam.dota.wins}
				</div>
				<div className={style.captionWins}>
					vittorie
				</div>
				<div className={style.dash}>
					&nbsp;-&nbsp;
				</div>
				<div className={style.losses}>
					{props.steam.dota.losses}
				</div>
				<div className={style.captionLosses}>
					sconfitte
				</div>
			</div>
			<div className={style.rank}>
				{rank}
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/570/0bbb630d63262dd66d2fdd0f7d37e8661a410075.jpg"} alt={""} title={"Dota 2"}/>
	);

	return (
		<Mini class={style.dota} header={header} body={body} user={props.user} icon={icon}/>
	);
}
