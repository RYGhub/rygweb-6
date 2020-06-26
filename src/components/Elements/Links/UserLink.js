import { useRoyalnetData } from 'bluelib';
import Link from './Link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../Avatar';
import ErrorAbbr from '../ErrorAbbr';


export default function (props) {
	if(!(props.uid || props.alias)) {
		return (
			<ErrorAbbr error={new Error("Missing uid or alias.")}>{unloadedContents}</ErrorAbbr>
		);
	}


	let unloadedContents = props.children;
	if(!unloadedContents) {
		if(props.uid) {
			unloadedContents = props.uid;
		}
		else if(props.alias) {
			unloadedContents = props.alias;
		}
	}

	let apiMethod, apiBody;
	if(props.uid) {
		apiMethod = "/api/user/ryg/v2";
		apiBody = {"uid": props.uid};
	}
	else if(props.alias) {
		apiMethod = "/api/user/ryg/v2";
		apiBody = {"alias": props.alias.toLowerCase()};
	}

	let [data, error, refresh] = useRoyalnetData("GET", apiMethod, apiBody);

	if(error !== undefined) {
		return (
			<ErrorAbbr error={error}>{unloadedContents}</ErrorAbbr>
		);
	}

	if(data === undefined) {
		if(props.uid) {
			return (
				<Link href={`/u/${props.uid}`}>
					<FontAwesomeIcon icon={faSpinner} pulse={true}/> {unloadedContents}
				</Link>
			);
		}
		else if(props.alias) {
			return (
				<Link href={`#`}>
					<FontAwesomeIcon icon={faSpinner} pulse={true}/> {unloadedContents}
				</Link>
			);
		}
	}

	let text = data.username;
	if(props.children instanceof Array && props.children.length > 0) {
		text = props.children;
	}

	return (
		<Link href={`/u/${data.uid}`}>
			<Avatar data={data}/> {text}
		</Link>
	);
}
