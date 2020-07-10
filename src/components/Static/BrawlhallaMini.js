import style from './BrawlhallaMini.less';
import Mini from './Mini';
import Link from '../Dynamic/Link';
import { Fragment } from 'preact';


export default function (props) {

	const header = (
		<Link class={style.header} icon={false} href={`https://www.brawlhalla.com/rankings/1v1/?p=${props.steam.brawlhalla.name}`}>
			<img className={style.avatar} src={"https://combo.steffo.eu/open/brawlhalla/BrawlhallaStandard.png"} alt={""}/>
			&nbsp;
			{props.steam.brawlhalla.name}
		</Link>
	);

	const body = (
		<Fragment>
			<div className={style.section1v1}>
				<div className={style.caption}>
					1v1
				</div>
				<div class={style.value}>
					{props.steam.brawlhalla["1v1"] ? props.steam.brawlhalla["1v1"].rating : "-"} <small class={style.mmr}>MMR</small>
				</div>
			</div>
			<div className={style.section2v2}>
				<div className={style.caption}>
					2v2
				</div>
				<div class={style.value}>
					{props.steam.brawlhalla["2v2"] ? props.steam.brawlhalla["2v2"].rating : "-"} <small class={style.mmr}>MMR</small>
				</div>
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/291550/c43fac31b8bf8821764603a14d09412bc3d45f66.jpg"} alt={""}/>
	);

	return (
		<Mini class={style.brawlhalla} header={header} body={body} user={props.user} icon={icon}/>
	);
}
