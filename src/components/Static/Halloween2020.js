import style from './Halloween2020.less';
import { concatClass, Panel, RoyalnetLoginStatus, useRoyalnetData } from 'bluelib';
import { useContext } from 'preact/hooks';
import ErrorBox from './ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Link from '../Dynamic/Link';


let url_pattern = /\[url=(.*?)](.*?)\[\/url]/;
let url_replacement = `<a href="$1">$2</a>`;


export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(loginStatus === null) {
		return (
			<ErrorBox error={new Error("Per vedere questa pagina devi aver effettuato il login.")}/>
		)
	}

	const [userData, userError, refresh] = useRoyalnetData("GET", "/api/user/trionfi/v2", {
		uid: loginStatus.user.uid
	});

	if(userError !== undefined) {
		return (
			<ErrorBox error={userError}/>
		);
	}

	if(userData === undefined) {
		return (
			<Panel class={style.halloween2020}>
				<div class={style.loading}>
					<FontAwesomeIcon icon={faSpinner} pulse={true}/> Preparing the ritual...
				</div>
			</Panel>
		)
	}


	if(userData.steam.length < 1) {
		return <ErrorBox error={new Error("Per partecipare a questo evento, devi aver connesso il tuo account Royalnet a Steam!")}/>;
	}

	let steam = userData.steam[0];
	let trionfistatus = steam.trionfistatus;

	let trionfi = [];
	for(const tkey in trionfistatus.trionfi) {
		if(trionfistatus.trionfi.hasOwnProperty(tkey)) {
			const tdata = trionfistatus.trionfi[tkey];
			const towned = tdata.completed_on ? style.lit : style.dim;
			const tpuzzle = tdata.puzzle ? style.hasPuzzle : null;

			let objective = tdata.objective.replace(url_pattern, url_replacement);

			if(tdata["variable"] === "xxi") {
				trionfi.push(<hr class={towned}/>)
			}

			let created = (
				<div class={concatClass(style.tarotGrid, towned, tpuzzle)}>
					<div class={concatClass(style.tarotTitle, style.tarotField)}>
						{tdata.title}
					</div>
					<div class={concatClass(style.tarotName, style.tarotField)}>
						{tdata.name}
					</div>
					<div class={concatClass(style.tarotObjective, style.tarotField)} dangerouslySetInnerHTML={{"__html": objective}}>
					</div>
					<div class={concatClass(style.tarotPuzzle, style.tarotField)}>
						{tdata.puzzle}
					</div>
				</div>
			);

			trionfi.push(created);

			if(tdata["variable"] === "xxi") {
				trionfi.push(
					<div class={towned}>
						Nel caso scoprissi come ottenere <span class={style.diablo}>IL MONDO</span>, manda una email
						a <a href={"mailto:ste.pigozzi+trionfireali@gmail.com"}>ste.pigozzi+trionfireali@gmail.com</a>, in modo che la tua soluzione possa essere verificata!
					</div>
				)
			}
		}
	}

	return (
		<Panel class={style.halloween2020}>
			<h1 class={style.largerTitle}>
				TRIONFI REALI
			</h1>
			<h2>
				TU SEI {steam.persona_name}, VERO?
			</h2>
			<div class={style.neutral}>
				<p>
					Benvenuto all'evento di Ottobre della Royal Games!
				</p>
				<p>
					Da oggi al 31 Ottobre, raccogli Trionfi completando le <i>spaventose</i> missioni elencate qui sotto.
				</p>
				<p>
					Molte richiederanno giochi a cui probabilmente non avrai mai giocato, e che probabilmente nemmeno avrai in libreria: è l'opportunità giusta per provare cose nuove e scambiarsi librerie di Steam (attraverso la condivisione famigliare)!
				</p>
			</div>
			<hr class={style.neutral}/>
			<div class={style.neutral}>
				<p>
					Prima di iniziare a fare missioni, <Link href={"https://steamcommunity.com/my/edit/settings"}>assicurati che il tuo profilo di Steam sia interamente pubblico</Link>!
				</p>
				<p>
					Tieni a mente che, per limitazioni tecniche, l'aggiornamento dei tuoi Trionfi potrebbe richiedere fino a 24 ore.
				</p>
			</div>
			<hr class={style.neutral}/>
			<h1>
				I TUOI TRIONFI
			</h1>
			{trionfi}
		</Panel>
	);
}
