import { BaseLink, useRoyalnetData } from 'bluelib';
import ErrorAbbr from '../Static/ErrorAbbr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function(props) {
	const [data, error] = useRoyalnetData("GET", "/api/diario/random/v1", {
		amount: 1
	});

	if(error !== undefined) {
		return (
			<ErrorAbbr error={error}>Errore</ErrorAbbr>
		);
	}

	if(data === undefined) {
		return (
			<span>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading...
			</span>
		);
	}

	const quote = data[0];

	return <BaseLink href={`/d/${quote.diario_id}`} class={props.class}>"{quote.text}"</BaseLink>;
}