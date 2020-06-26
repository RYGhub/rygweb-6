import { Panel, RoyalnetLoginStatus, Split } from 'bluelib';
import MainTitle from '../components/Static/MainTitle';
import Wiki from '../components/Dynamic/WikiExisting';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'preact-router';
import { useContext } from 'preact/hooks';
import AnyLink from '../components/Dynamic/Link';
import MembersList from '../components/Dynamic/MembersList';

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
			<Panel title={"Users"}>
				<MembersList/>
			</Panel>
		</div>
	);
}
