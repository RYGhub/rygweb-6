import { Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from './ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AnyLink from './AnyLink';
import StaticUserLink from './Static/StaticUserLink';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/user/list/v1");

	if(error !== undefined) {
		return (
			<ErrorBox error={error}/>
		);
	}

	if(data === undefined) {
		return (
			<p>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading pages list...
			</p>
		)
	}

	let items = data.map((user) => {
		return (
			<li>
				<StaticUserLink data={user}>{user.username}</StaticUserLink>
			</li>
		)
	});

	return (
		<ul>
			{items}
		</ul>
	);
}
