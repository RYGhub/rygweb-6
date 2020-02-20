import { Component } from 'preact';
import style from './homepage.less';
import MainTitle from '../components/maintitle';
import Split from '../components/split';
import Box from '../components/box';
import Link from '../components/link';
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
					<div>
						<Box left={"Link utili"}>
							<ul class={style.linkslist}>
								<li>
									<Link href={"https://discord.gg/UpuU9Y4"}><FontAwesomeIcon icon={faDiscord}/> Discord</Link>
								</li>
								<li>
									<Link href={"https://steamcommunity.com/groups/royalgamescastle"}><FontAwesomeIcon icon={faSteam}/> Steam</Link>
								</li>
								<li>
									<Link href={"https://www.reddit.com/r/royalgames"}><FontAwesomeIcon icon={faReddit}/> Reddit</Link>
								</li>
								<li>
									<Link href={"https://www.youtube.com/channel/UCR_ONjCjfmHKzHImw_SMvhA"}><FontAwesomeIcon icon={faYoutube}/> YouTube</Link>
								</li>
							</ul>
						</Box>
						<Box left={<span>Attuali detentori del Nome Dorato</span>}>
							Nessuno (<Link href={"/ilmonarcadelvalhalla2"}>per ora</Link>)
						</Box>
					</div>
					<Box left={"Novità del sito"}>
						<section>
							<h4>
								2020-02-19
							</h4>
							<ul>
								<li>Fixato bug che impediva l'accesso al sito agli utenti non loggati</li>
								<li>Riorganizzato parecchie parti di codice</li>
							</ul>
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
								<li>Sostituite le icone di <Link href={"https://fontawesome.com/"}>font-awesome</Link> a quelle di fork-awesome</li>
								<li><Link href={"https://github.com/Ichicoro"}>@Ichicoro</Link>: Aggiunti nuovi font monospace</li>
								<li>Ricreato parte dell'editor delle pagine della Wiki</li>
							</ul>
							<h4>
								2020-02-14
							</h4>
							<ul>
								<li>Creato il sito</li>
								<li>Aggiunto il visualizzatore del Diario</li>
								<li>Aggiunte le icone di <Link href={"https://forkaweso.me/Fork-Awesome/"}>fork-awesome</Link></li>
							</ul>
						</section>
					</Box>
				</Split>
			</div>
		);
	}
}
