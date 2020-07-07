import { Panel, Section } from 'bluelib';
import SteamMini from './SteamMini';
import style from './LinkedAccountsBox.less';

export default function (props) {
	const minis = [];

	for(let steam of props.data.steam) {
		minis.push(<SteamMini data={steam}/>);
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
