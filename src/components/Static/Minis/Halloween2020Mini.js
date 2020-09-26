import style from './Halloween2020Mini.less';
import Mini from './Mini';
import { Fragment } from 'preact';
import { BaseLink, concatClass } from 'bluelib';
import Link from '../../Dynamic/Link';


export default function (props) {
	const trionfistatus = props.steam.trionfistatus;

	const header = (
		<BaseLink class={style.header} href={"/2020/o"}>
			<img class={style.avatar} src={props.steam.avatar} alt={""}/>
			&nbsp;
			{props.steam.persona_name}
		</BaseLink>
	);

	const trionfi = [];
	for(const tkey in trionfistatus.trionfi) {
		if(trionfistatus.trionfi.hasOwnProperty(tkey)) {
			const tdata = trionfistatus.trionfi[tkey];

			const towned = tdata.completed_on ? style.lit : style.dim;

			let zawarudo = null;
			if(tdata.roman === "XXI") {
				zawarudo = style.zawarudo;
			}

			let created = (
				<div class={concatClass(style.tarot, towned, zawarudo)} title={`${tdata.roman} - ${tdata.name}`}>
					{tdata.title}
				</div>
			);

			trionfi.push(created)
		}
	}

	const body = (
		<Fragment>
			<div className={style.tarotList}>
				{trionfi}
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"https://ryg.s3.fr-par.scw.cloud/resources/halloween2020/logo.png"} alt={""} title={"Trionfi Reali"}/>
	);

	return (
		<Mini class={style.halloween} header={header} body={body} user={props.user} icon={icon}/>
	);
}
