import { useRoyalnetData } from 'bluelib';
import ErrorAbbr from '../Static/ErrorAbbr';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/royalnet/version/v1");

	if(error !== undefined) {
		return (
			<ErrorAbbr error={error}>Royalnet</ErrorAbbr>
		);
	}

	if(data === undefined) {
		return (
			<span>
				Royalnet <FontAwesomeIcon icon={faSpinner} pulse={true}/>
			</span>
		);
	}

	return (
		<Link href={`https://github.com/Steffo99/royalnet/releases/tag/${data.semantic}`}>
			Royalnet {data.semantic}
		</Link>
	);
}
