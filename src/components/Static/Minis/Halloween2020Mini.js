import style from './Halloween2020Mini.less';
import Mini from './Mini';
import { Fragment } from 'preact';
import { BaseLink, concatClass } from 'bluelib';


const tarotInfo = {
	"zero": {
		"draw_as": "o",
		"display_as": "0",
		"name": "Il Folle",
	},
	"i": {
		"draw_as": "i",
		"display_as": "I",
		"name": "Il Mago",
	},
	"ii": {
		"draw_as": "ii",
		"display_as": "II",
		"name": "La Papessa",
	},
	"iii": {
		"draw_as": "iii",
		"display_as": "III",
		"name": "L'Imperatrice",
	},
	"iv": {
		"draw_as": "iv",
		"display_as": "IV",
		"name": "L'Imperatore",
	},
	"v": {
		"draw_as": "v",
		"display_as": "V",
		"name": "Il Papa",
	},
	"vi": {
		"draw_as": "vi",
		"display_as": "VI",
		"name": "Gli Amanti",
	},
	"vii": {
		"draw_as": "vii",
		"display_as": "VII",
		"name": "Il Carro",
	},
	"viii": {
		"draw_as": "viii",
		"display_as": "VIII",
		"name": "La Giustizia",
	},
	"ix": {
		"draw_as": "ix",
		"display_as": "IX",
		"name": "L'Eremita",
	},
	"x": {
		"draw_as": "x",
		"display_as": "X",
		"name": "La Fortuna",
	},
	"xi": {
		"draw_as": "xi",
		"display_as": "XI",
		"name": "La Forza",
	},
	"xii": {
		"draw_as": "xii",
		"display_as": "XII",
		"name": "L'Appeso",
	},
	"xiii": {
		"draw_as": "xiii",
		"display_as": "XIII",
		"name": "La Morte",
	},
	"xiv": {
		"draw_as": "xiv",
		"display_as": "XIV",
		"name": "La Temperanza",
	},
	"xv": {
		"draw_as": "xv",
		"display_as": "XV",
		"name": "Il Diavolo",
	},
	"xvi": {
		"draw_as": "xvi",
		"display_as": "XVI",
		"name": "La Torre",
	},
	"xvii": {
		"draw_as": "xvii",
		"display_as": "XVII",
		"name": "Le Stelle",
	},
	"xviii": {
		"draw_as": "xviii",
		"display_as": "XVIII",
		"name": "La Luna",
	},
	"xix": {
		"draw_as": "xix",
		"display_as": "XIX",
		"name": "Il Sole",
	},
	"xx": {
		"draw_as": "xx",
		"display_as": "XX",
		"name": "Il Giudizio",
	},
	"xxi": {
		"draw_as": "xxi",
		"display_as": "XII",
		"name": "Il Mondo",
		"extra_class": style.zawarudo,
	},
};


export default function (props) {
	const header = (
		<BaseLink class={style.header} href={`/u/${props.user.uid}`}>
			<img className={style.avatar} src={props.user.avatar_url} alt={""}/>
			&nbsp;
			{props.user.username}
		</BaseLink>
	);

	const tarots = [];
	for(const tkey in props.data.tarots) {
		if(props.data.tarots.hasOwnProperty(tkey)) {
			const tdata = props.data.tarots[tkey];
			const tinfo = tarotInfo[tkey];
			const towned = tdata === null ? style.missing : style.owned;

			let created = (
				<div class={concatClass(style.tarot, towned, tinfo.extra_class)} title={`${tinfo.display_as} - ${tinfo.name}`}>
					{tinfo.draw_as}
				</div>
			);

			tarots.push(created)
		}
	}

	const body = (
		<Fragment>
			<div className={style.tarotList}>
				{tarots}
			</div>
		</Fragment>
	);

	const icon = (
		<img src={"https://ryg.s3.fr-par.scw.cloud/resources/halloween2020/logo.png"} alt={""} title={"Halloween 2020"}/>
	);

	return (
		<Mini class={style.halloween} header={header} body={body} user={props.user} icon={icon}/>
	);
}
