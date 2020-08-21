import { BaseLink, useRoyalnetData } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ErrorAbbr from '../Static/ErrorAbbr';
import StaticUserLink from '../Static/StaticUserLink';


export default function (props) {
	if(!(props.uid || props.alias)) {
		return (
			<ErrorAbbr error={new Error("Missing uid or alias.")}>{props.children}</ErrorAbbr>
		);
	}

	let loadingText;
	if(!props.children) {
		if(props.uid) {
			loadingText = `/u/${props.uid}`;
		}
		else if(props.alias) {
			loadingText = props.alias;
		}
	}
	else {
		loadingText = props.children;
	}

	let apiBody;
	if(props.uid) {
		apiBody = {"uid": props.uid};
	}
	else if(props.alias) {
		apiBody = {"alias": props.alias.toLowerCase()};
	}

	let [data, error] = useRoyalnetData("GET","/api/user/ryg/v2", apiBody);

	if(error !== undefined) {
		return (
			<ErrorAbbr error={error}>{loadingText}</ErrorAbbr>
		);
	}

	if(data === undefined) {
		if(props.uid) {
			return (
				<BaseLink href={`/u/${props.uid}`}>
					<FontAwesomeIcon icon={faSpinner} pulse={true}/> {loadingText}
				</BaseLink>
			);
		}
		else if(props.alias) {
			return (
				<BaseLink disabled={true}>
					<FontAwesomeIcon icon={faSpinner} pulse={true}/> {loadingText}
				</BaseLink>
			);
		}
	}

	return (
		<StaticUserLink data={data}>
			{props.children ? props.children : data.username}
		</StaticUserLink>
	);
}
