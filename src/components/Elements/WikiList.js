import { Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from './ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AnyLink from './Links/AnyLink';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/wiki/list/v2");

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

	let items = data.forEach((page) => {
		return (
			<li>
				<AnyLink href={`/w/${page.page_id}`}>{page.title}</AnyLink>
			</li>
		)
	});

	return (
		<ul>
			{items}
		</ul>
	);
}
