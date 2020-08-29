import StaticDiarioEntry from '../Static/StaticDiarioEntry';
import { useRoyalnetData } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ErrorBox from '../Static/ErrorBox';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/diario/v2", {
		id: props.diarioId,
	});

	if(error !== undefined) {
		return (
			<ErrorBox error={error}/>
		);
	}

	if(data === undefined) {
		return (
			<blockquote>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading...
			</blockquote>
		)
	}

	return (
		<StaticDiarioEntry data={data}/>
	)

}
