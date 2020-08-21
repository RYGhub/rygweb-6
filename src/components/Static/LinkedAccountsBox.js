import { Panel } from 'bluelib';
import SteamMini from './SteamMini';
import DotaMini from './DotaMini';
import BrawlhallaMini from './BrawlhallaMini';
import MiniHolder from './MiniHolder';
import LeagueMini from './LeagueMini';

export default function (props) {
	const minis = [];

	for(let steam of props.data.steam) {
		minis.push(<SteamMini user={props.data} steam={steam}/>);

		if(steam.dota) {
			minis.push(<DotaMini user={props.data} steam={steam}/>);
		}

		if(steam.brawlhalla) {
			minis.push(<BrawlhallaMini user={props.data} steam={steam}/>);
		}
	}

	for(let league of props.data.leagueoflegends) {
		minis.push(<LeagueMini user={props.data} league={league}/>);
	}

	if(minis.length === 0) {
		return null;
	}

	return (
		<Panel title={"Account connessi"}>
			<MiniHolder>
				{minis}
			</MiniHolder>
		</Panel>
	);
}
