import { Component } from 'preact';
import style from './homepage.less';
import MainTitle from '../components/maintitle';
import Split from '../components/split';
import Box from '../components/box';
import ListIconBox from '../components/listiconbox';
import IconLink from '../components/iconlink';
import { Icon, icons } from '../components/icon';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} imgalt={"⭐ ️"} text={"Royal Games"} />
				<Box left={"Benvenuto"}>
					Benvenuto al sito web della Royal Games! E' ancora <b>in costruzione</b>, ma almeno non dice più <i>not found</i> <code>:)</code>
				</Box>
				<Split>
					<ListIconBox left={"Link utili"}>
						<li>
							<IconLink icon={icons["fa-discord"]} href={"https://discord.gg/UpuU9Y4"}>Discord</IconLink>
						</li>
						<li>
							<IconLink icon={icons["fa-steam"]} href={"https://steamcommunity.com/groups/royalgamescastle"}>Steam</IconLink>
						</li>
						<li>
							<IconLink icon={icons["fa-reddit"]} href={"https://www.reddit.com/r/royalgames"}>Reddit</IconLink>
						</li>
						<li>
							<IconLink icon={icons["fa-youtube"]} href={"https://www.youtube.com/channel/UCR_ONjCjfmHKzHImw_SMvhA"}>YouTube</IconLink>
						</li>
					</ListIconBox>
					<Box left={"Novità del sito"}>
						<section>
							<h4>
								2020-14-02
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
