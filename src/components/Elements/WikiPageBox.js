import { Box, useRoyalnetData } from 'bluelib';
import RoyalMarkdown from '../Rendering/RoyalMarkdown';
import ErrorBox from './ErrorBox';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/wiki/get/v1", {"id": props.id});

	if(error) {
		return <ErrorBox error={error}/>
	}

	if(data === undefined) {
		return <Box><FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading Wiki...</Box>
	}

	return (
		<Box>
			<h1>
				{data.title}
			</h1>
			<RoyalMarkdown>
				{data.contents}
			</RoyalMarkdown>
		</Box>
	);
}
