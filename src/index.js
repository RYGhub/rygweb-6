import {Component} from "preact"
import "./index.less"
import "./manifest.json"
import MainTitle from "./components/maintitle"
import Box from "./components/box"
import Split from "./components/split"
import IconLink from "./components/iconlink"
import {faDiscord, faReddit, faSteam} from "@fortawesome/free-brands-svg-icons"
import ListIconBox from "./components/listiconbox"

export default class Index extends Component {
	render() {
		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} text={"Royal Games"} />
				<Split>
					<Box left={"Benvenuto"}>Benvenuto al sito web della Royal Games! E' ancora <b>in costruzione</b>, ma almeno non dice più <i>not found</i> <code>:)</code></Box>
					<ListIconBox left={"Link utili"}>
						<li>
							<IconLink icon={faDiscord} href={"https://discord.gg/UpuU9Y4"}>Discord</IconLink>
						</li>
						<li>
							<IconLink icon={faSteam} href={"https://steamcommunity.com/groups/royalgamescastle"}>Steam</IconLink>
						</li>
						<li>
							<IconLink icon={faReddit} href={"https://www.reddit.com/r/royalgames"}>Reddit</IconLink>
						</li>
					</ListIconBox>
				</Split>
			</div>
		)
	}
}
