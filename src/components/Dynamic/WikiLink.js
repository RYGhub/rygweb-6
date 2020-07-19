import { BaseLink, useRoyalnetData } from 'bluelib';
import StaticWikiLink from '../Static/StaticWikiLink';
import ErrorAbbr from '../Static/ErrorAbbr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function (props) {
	let loadingText;
	if(!props.children) {
		loadingText = `/w/${props.pageId}`;
	}
	else {
		loadingText = props.children;
	}

	let [data, error] = useRoyalnetData("GET", "/api/wiki/v2", {
		page_id: props.pageId
	});

	if(error !== undefined) {
		return (
			<ErrorAbbr error={error}>{loadingText}</ErrorAbbr>
		);
	}

	if(data === undefined) {
		return (
			<BaseLink href={`/w/${props.pageId}`}>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> {loadingText}
			</BaseLink>
		);
	}

	return (
		<StaticWikiLink data={data}>
			{props.child}
		</StaticWikiLink>
	);
}
