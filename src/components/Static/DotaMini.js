import style from './DotaMini.less';
import Mini from './Mini';
import Link from '../Dynamic/Link';


export default function (props) {

	let medal = `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png`;
	let stars = "";
	if(props.data.dota.rank) {
		medal = `https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${Math.floor(props.data.dota.rank.raw / 10)}.png`;
		stars = `https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${props.data.dota.rank.raw % 10}.png`;
	}

	return (
		<Mini class={style.dota}>
			<div class={style.sectionName}>
				<Link icon={false} class={style.contents} href={`https://www.opendota.com/players/${props.data.steamid32}`}>
					<img class={style.avatar} src={props.data.avatar} alt={""}/>
					&nbsp;
					{props.data.persona_name}
				</Link>
			</div>
			<div class={style.sectionWl}>
				<div class={style.wins}>
					{props.data.dota.wins}
				</div>
				<div class={style.captionWins}>
					vittorie
				</div>
				<div class={style.dash}>
					&nbsp;-&nbsp;
				</div>
				<div class={style.losses}>
					{props.data.dota.losses}
				</div>
				<div className={style.captionLosses}>
					sconfitte
				</div>
			</div>
			<div className={style.sectionRank}>
				<div className={style.full}>
					<img className={style.stars}
						 alt={""}
						 src={stars}/>
					<img className={style.medal}
						 alt={""}
						 src={medal}/>
				</div>
				<div className={style.name}>
					{props.data.dota.rank.medal.toLowerCase()} {props.data.dota.rank.rank}
				</div>
			</div>
		</Mini>
	);
}
