import { Panel, RoyalnetLoginStatus, Split } from 'bluelib';
import MainTitle from '../components/Static/MainTitle';
import Wiki from '../components/Dynamic/WikiExisting';
import { useContext } from 'preact/hooks';
import MembersList from './MembersList';

export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);

	return (
		<div>
			<MainTitle src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐️ "}>Royal Games</MainTitle>
			<Wiki pageId={1}/>
			<Split>
				<Wiki pageId={2}/>
				<Wiki pageId={3}/>
			</Split>
		</div>
	);
}
