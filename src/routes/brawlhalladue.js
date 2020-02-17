import { Component } from 'preact';
import style from './brawlhalladue.less';
import Box from '../components/box';
import MainTitle from '../components/maintitle';
import NomeDorato from '../components/nomedorato';

export default class BrawlhallaDue extends Component {
	render() {
		return (
			<div>
				<MainTitle imgsrc={"https://images.smash.gg/images/tournament/197567/image-cd72fc66e63671df7d2a7aa0b0f18325.png"} imgalt={"👑"} text={"Il Monarca del Valhalla 2"}/>
				<Box left={"Informazioni"}>
					<p>
						Benvenuti al secondo Torneo di Brawlhalla della Royal Games!
					</p>
					<p>
						Dopo il successone del primo un anno fa, è giunto il momento di vedere di nuovo chi sarà il nuovo Monarca del Valhalla della Royal Games!
					</p>
					<p>
						Il torneo è aperto a tutti i membri Royal Games, di qualsiasi livello di abilità: siamo tutti abbastanza scarsi, e l'obiettivo principale è divertirsi giocando a qualcosa di diverso dal solito, non vincere!
					</p>
					<p>
						Il torneo si svolgerà interamente online nei giorni tra il 21 Febbraio e il 28 Febbraio, con l'eccezione della finale, che (se possibile per entrambi i finalisti) sarà giocata in LAN a casa di Steffo il 29 Febbraio.
					</p>
				</Box>
				<Box left={"Registrazione"}>
					<h1><a href={"https://smash.gg/tournament/il-monarca-del-valhalla-2/register"}>Iscrivetevi al torneo su smash.gg!</a></h1>
				</Box>
				<Box left={"Premi"}>
					<p>
						Il montepremi aumenterà all'aumentare dei partecipanti!
					</p>
					<p>
						<small>Quindi cercate di convincere altri membri della RYG a partecipare!</small>
					</p>
					<blockquote>
						<h4>1° posto</h4>
						<ul>
							<li>5 € di Credito Steam</li>
							<li><NomeDorato>Nome Dorato</NomeDorato> su Discord per due settimane</li>
							<li>8 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>2° posto</h4>
						<ul>
							<li>7 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>3° posto</h4>
						<ul>
							<li>6 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>4° posto</h4>
						<ul>
							<li>5 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>5°, 6°, 7° e 8° posto</h4>
						<ul>
							<li>4 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>Tutti gli altri partecipanti</h4>
						<ul>
							<li>3 fiorygi</li>
						</ul>
					</blockquote>
				</Box>
			</div>
		);
	}
}
