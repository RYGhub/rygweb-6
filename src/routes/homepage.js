import { Component } from 'preact';
import style from './homepage.less';
import MainTitle from '../components/maintitle';
import Split from '../components/split';
import Box from '../components/box';
import ListIconBox from '../components/listiconbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit, faSteam, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} imgalt={"⭐"} text={"Royal Games"} />
				<Box left={"Benvenuto"}>
					Benvenuto al sito web della Royal Games! E' ancora <b>in costruzione</b>, ma almeno non dice più <i>not found</i> <code>:)</code>
				</Box>
				<Split>
					<ListIconBox left={"Link utili"}>
						<li>
							<a href={"https://discord.gg/UpuU9Y4"}><FontAwesomeIcon icon={faDiscord}/> Discord</a>
						</li>
						<li>
							<a href={"https://steamcommunity.com/groups/royalgamescastle"}><FontAwesomeIcon icon={faSteam}/> Steam</a>
						</li>
						<li>
							<a href={"https://www.reddit.com/r/royalgames"}><FontAwesomeIcon icon={faReddit}/> Reddit</a>
						</li>
						<li>
							<a href={"https://www.youtube.com/channel/UCR_ONjCjfmHKzHImw_SMvhA"}><FontAwesomeIcon icon={faYoutube}/> YouTube</a>
						</li>
					</ListIconBox>
					<Box left={"Novità del sito"}>
						<section>
							<h4>
								2020-02-17
							</h4>
							<ul>
								<li>Aggiunta pagina "Il Monarca del Valhalla 2"</li>
								<li>Aggiunte pagine profilo (semivuote)</li>
								<li>Aggiunto cambio password</li>
							</ul>
							<h4>
								2020-02-16
							</h4>
							<ul>
								<li>Aggiunta l'interfaccia di login</li>
								<li>Login persistente</li>
								<li>Modifica pagine Wiki</li>
								<li>Creazione pagine Wiki</li>
							</ul>
							<h4>
								2020-02-15
							</h4>
							<ul>
								<li>Aggiunto la Wiki (sola lettura)</li>
								<li>Migliorata visualizzazione del diario</li>
								<li>Risolto il bug per cui <code>preact/compat</code> non funzionava</li>
								<li>Sostituite le icone di <a href={"https://fontawesome.com/"}>font-awesome</a> a quelle di fork-awesome</li>
								<li><a href={"https://github.com/Ichicoro"}>@Ichicoro</a>: Aggiunti nuovi font monospace</li>
								<li>Ricreato parte dell'editor delle pagine della Wiki</li>
							</ul>
							<h4>
								2020-02-14
							</h4>
							<ul>
								<li>Creato il sito</li>
								<li>Aggiunto il visualizzatore del Diario</li>
								<li>Aggiunte le icone di <a href={"https://forkaweso.me/Fork-Awesome/"}>fork-awesome</a></li>
							</ul>
						</section>
					</Box>
				</Split>
			</div>
		);
	}
}
