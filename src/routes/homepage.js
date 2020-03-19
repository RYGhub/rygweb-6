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
					<p>
						Benvenuto alla pagina Steam della Royal Games!
					</p>
					<p>
						Siamo una piccola community amichevole principalmente dedicata al PC gaming.
					</p>
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
					</div>
					<div/>
				</Split>
			</div>
		);
	}
}
