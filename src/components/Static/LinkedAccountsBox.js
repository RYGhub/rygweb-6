import { Panel } from 'bluelib';
import SteamMini from './Minis/SteamMini';
import DotaMini from './Minis/DotaMini';
import BrawlhallaMini from './Minis/BrawlhallaMini';
import MiniHolder from './MiniHolder';
import LeagueMini from './Minis/LeagueMini';
import OsuMini from './Minis/OsuMini';
import Halloween2020Mini from './Minis/Halloween2020Mini';

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

		if(steam.trionfistatus) {
			minis.push(<Halloween2020Mini user={props.data} steam={steam}/>)
		}
	}

	for(let league of props.data.leagueoflegends) {
		minis.push(<LeagueMini user={props.data} league={league}/>);
	}

	for(let osu of props.data.osu) {
		minis.push(<OsuMini user={props.data} osu={osu}/>);
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
