import { Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import WikiExisting from '../components/Dynamic/WikiExisting';
import StaticUserBioBox from '../components/Static/StaticUserBioBox';
import Masonry from '../components/Static/Masonry';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/user/ryg/list/v1");

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

	let users = data;
	users.sort((a, b) => {
		if(a.username > b.username) {
			return 1;
		}
		else if(a.username === b.username) {
			return 0;
		}
		else {
			return -1;
		}
	});
	let items = users.map((user) => {
		return (
			<StaticUserBioBox user={user}/>
		)
	});

	return (
		<div>
			<WikiExisting pageId={85}/>
			<Masonry>
				{items}
			</Masonry>
		</div>
	);
}
