import { Component } from 'preact';
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
						Il torneo si svolgerà interamente online nei giorni dal 21 Febbraio, con l'eccezione della finale, che (se possibile per entrambi i finalisti) sarà giocata in LAN a casa di Steffo.
					</p>
				</Box>
				<Box left={"Registrazione"}>
					Il periodo di iscrizione è terminato.
				</Box>
				<Box left={"Bracket"}>
					<h1><a href={"https://smash.gg/tournament/il-monarca-del-valhalla-2/events/1v1/overview"}>Guarda il progresso del torneo su smash.gg!</a></h1>
				</Box>
				<Box left={"Casting"}>
					<h1>Cerchiamo persone che commentino le partite!</h1>
					<p>
						Se ne avete voglia, contattate Steffo!
					</p>
				</Box>
				<Box left={"Premi"}>
					<blockquote>
						<h4>1° posto</h4>
						<ul>
							<li>10 € di Credito Steam</li>
							<li><NomeDorato>Nome Dorato</NomeDorato> su Discord per due settimane</li>
							<li>10 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>2° posto</h4>
						<ul>
							<li><NomeDorato>Nome Dorato</NomeDorato> su Discord per due settimane</li>
							<li>9 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>3° posto</h4>
						<ul>
							<li>9 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>5° posto</h4>
						<ul>
							<li>8 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>7° posto</h4>
						<ul>
							<li>7 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>9° posto</h4>
						<ul>
							<li>6 fiorygi</li>
						</ul>
					</blockquote>
					<blockquote>
						<h4>13° posto</h4>
						<ul>
							<li>5 fiorygi</li>
						</ul>
					</blockquote>
				</Box>
			</div>
		);
	}
}
