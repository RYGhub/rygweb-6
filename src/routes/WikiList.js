import { Panel, RoyalnetLoginStatus, Split, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Link from '../components/Dynamic/Link';
import { useContext } from 'preact/hooks';
import StaticWikiLink from '../components/Static/StaticWikiLink';
import IconUl from '../components/Static/IconUl';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/wiki/list/v2");
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(error !== undefined) {
		return (
			<ErrorBox error={error}/>
		);
	}

	if(data === undefined) {
		return (
			<Panel>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Caricamento...
			</Panel>
		)
	}

	const categories = {};
	for(const page of data) {
		if(categories[page.category] === undefined) {
			categories[page.category] = []
		}
		categories[page.category].push(page);
	}

	console.log(categories);

	const panels = [];
	for(const category of Object.keys(categories)) {
		const pages = [];
		for(const page of categories[category]) {
			pages.push(
				<li><StaticWikiLink data={page}/></li>
			)
		}
		panels.push(
			<Panel title={category}>
				<IconUl>
					{pages}
				</IconUl>
			</Panel>
		)
	}

	return (
		<div>
			<Panel>
				<Link icon={false} disabled={!(loginStatus && loginStatus.user.roles.includes("member"))} href={"/w/new"}><FontAwesomeIcon icon={faPlusSquare}/> Crea nuova</Link>
			</Panel>
			<Split>
				{panels}
			</Split>
		</div>
	);
}
