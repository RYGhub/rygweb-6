import { Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AnyLink from '../components/Dynamic/Link';
import StaticUserLink from '../components/Static/StaticUserLink';
import QuadriColumnList from '../components/Static/QuadriColumnList';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/user/ryg/list/v1");

	if(error !== undefined) {
		return (
			<ErrorBox error={error}/>
		);
	}

	if(data === undefined) {
		return (
			<p>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading members list...
			</p>
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
			<li>
				<StaticUserLink data={user}>{user.username}</StaticUserLink>
			</li>
		)
	});

	return (
		<Panel title={"Membri"}>
			<QuadriColumnList>
				{items}
			</QuadriColumnList>
		</Panel>
	);
}
