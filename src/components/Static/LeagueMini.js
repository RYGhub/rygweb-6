import style from './DotaMini.less';
import Mini from './Mini';
import Link from '../Dynamic/Link';
import { Fragment } from 'preact';


export default function (props) {

	const header = (
		<Link icon={false} class={style.header} href={`https://euw.op.gg/summoner/userName=${props.league.summoner_name}`}>
			<img class={style.avatar} src={`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${props.league.profile_icon_id}.png`} alt={""}/>
			&nbsp;
			{props.league.summoner_name}
		</Link>
	);

	const body = (
		<Fragment>
		</Fragment>
	);

	const icon = (
		<img src={""} alt={""}/>
	);

	return (
		<Mini class={style.dota} header={header} body={body} user={props.user} icon={icon}/>
	);
}
