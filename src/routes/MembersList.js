import { Panel, Section, Split, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AnyLink from '../components/Dynamic/Link';
import StaticUserLink from '../components/Static/StaticUserLink';
import QuadriColumnList from '../components/Static/QuadriColumnList';
import Wiki from '../components/Dynamic/WikiExisting';

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
			<Panel title={<StaticUserLink data={user}>{user.username}</StaticUserLink>}/>
		)
	});

	return (
		<Fragment>
			<Wiki pageId={85}/>
			<Section>
				{items}
			</Section>
		</Fragment>
	);
}
