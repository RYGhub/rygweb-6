import { Panel, Section } from 'bluelib';
import SteamMini from './SteamMini';
import style from './LinkedAccountsBox.less';
import DotaMini from './DotaMini';
import BrawlhallaMini from './BrawlhallaMini';

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

	if(minis.length === 0) {
		return null;
	}

	return (
		<Panel title={"Account connessi"}>
			<div class={style.flex}>
				{minis}
			</div>
		</Panel>
	);
}
