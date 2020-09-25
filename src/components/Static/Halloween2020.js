import style from './Halloween2020.less';
import { concatClass, Panel, RoyalnetLoginStatus, useRoyalnetData } from 'bluelib';
import { useContext } from 'preact/hooks';
import ErrorBox from './ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


let url_pattern = /\[url=(.*?)](.*?)\[\/url]/;
let url_replacement = `<a href="$1">$2</a>`;


export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(loginStatus === null) {
		return (
			<ErrorBox error={new Error("Per vedere questa pagina devi aver effettuato il login.")}/>
		)
	}

	const [userData, userError, refresh] = useRoyalnetData("GET", "/api/user/ryg/v2", {
		uid: loginStatus.user.uid
	});

	if(userError !== undefined) {
		return (
			<ErrorBox error={userError}/>
		);
	}

	if(userData === undefined) {
		return (
			<Panel className={style.halloween2020}>
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
			const towned = tdata.completed_on ? style.owned : style.missing;

			let objective = tdata.objective.replace(url_pattern, url_replacement);

			if(tdata["variable"] === "xxi") {
				trionfi.push(<hr class={towned}/>)
			}

			let created = (
				<div class={style.tarotContainer} _variable={tdata["variable"]}>
					<div className={concatClass(style.tarotGrid, towned)}>
						<div class={style.tarotTitle}>
							{tdata.title}
						</div>
						<div class={style.tarotName}>
							{tdata.name}
						</div>
						<div class={style.tarotObjective} dangerouslySetInnerHTML={{"__html": objective}}>
						</div>
					</div>
				</div>
			);

			trionfi.push(created)
		}
	}

	return (
		<Panel className={style.halloween2020}>
			<h1 className={style.largerTitle}>
				TRIONFI REALI
			</h1>
			<h2>
				TU SEI {steam.persona_name}, VERO?
			</h2>
			{trionfi}
		</Panel>
	);
}
