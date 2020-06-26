import { Panel, RoyalnetLoginStatus, Split } from 'bluelib';
import MainTitle from '../components/Elements/MainTitle';
import Wiki from '../components/Elements/Dynamic/WikiExisting';
import WikiList from '../components/Elements/WikiList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'preact-router';
import { useContext } from 'preact/hooks';
import AnyLink from '../components/Elements/AnyLink';
import MembersList from '../components/Elements/MembersList';

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
			<Panel title={"Pagine Wiki"}>
				<WikiList/>
				<ul>
					<li><AnyLink href={(loginStatus && loginStatus.user.roles.includes("member")) ? "/w/new" : "#"}><FontAwesomeIcon icon={faPlusSquare}/> Crea nuova</AnyLink></li>
				</ul>
			</Panel>
			<Panel title={"Users"}>
				<MembersList/>
			</Panel>
		</div>
	);
}
