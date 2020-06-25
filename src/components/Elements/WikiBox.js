import { Panel, useRoyalnetData } from 'bluelib';
import RoyalMarkdown from '../Rendering/RoyalMarkdown';
import ErrorBox from './ErrorBox';
import Avatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Link from './Links/Link';

export default function (props) {
	const [wikiData, wikiError] = useRoyalnetData("GET", "/api/wiki/v2", {
		page_id: props.pageId
	});

	if(wikiError !== undefined) {
		return (
			<ErrorBox error={wikiError}/>
		);
	}

	if(wikiData === undefined) {
		return (
			<Panel>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading wiki...
			</Panel>
		)
	}

	let wikiContents = null;
	if(wikiData.format === "gfm") {
		wikiContents = (
			<RoyalMarkdown>
				{wikiData.contents}
			</RoyalMarkdown>
		)
	}
	else {
		wikiContents = (
			<ErrorBox error={new Error(`Unknown wiki format: ${wikiData.format}`)}/>
		)
	}

	return (
		<Panel title={<Link href={`/w/${props.pageId}`}>{wikiData.title}</Link>}>
			{wikiContents}
		</Panel>
	);
}
