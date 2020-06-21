import { Box, useRoyalnetData } from 'bluelib';
import ErrorBox from './ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function (props) {
	const [data, error, refresh] = useRoyalnetData("GET", "/api/wiki/list/v1", {});

	if(error) {
		return <ErrorBox error={error}/>
	}

	if(data === undefined) {
		return <p><FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading Wiki pages list...</p>
	}

	return (
		<ul>
			{data.map((page) => <li><a href={`/w/${page.page_id}`}>{page.title}</a></li>)}
		</ul>
	);
}
