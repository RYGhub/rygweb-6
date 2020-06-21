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
		apiMethod = "/api/user/get/ryg/v1";
		apiBody = {"id": props.uid};
	}
	else if(props.alias) {
		apiMethod = "/api/user/find/ryg/v1";
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

	let avatar;
	if(data.avatar_url) {
		avatar = <Avatar src={data.avatar_url}/>;
	}
	else if(data.steam.length > 0 && data.steam[0].avatar) {
		avatar = <Avatar src={data.steam[0].avatar}/>;
	}
	else {
		avatar = <Avatar src={"https://combo.steffo.eu/open/ryg/GenericUser.png"}/>
	}

	let text = data.username;
	if(props.children instanceof Array && props.children.length > 0) {
		text = props.children;
	}

	return (
		<Link href={`/u/${data.uid}`}>
			{avatar} {text}
		</Link>
	);
}
