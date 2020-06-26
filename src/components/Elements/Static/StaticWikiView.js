import { Box, Panel, useRoyalnetData } from 'bluelib';
import RoyalMarkdown from '../../Rendering/RoyalMarkdown';
import ErrorBox from '../ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Link from '../Link';
import HZero from '../HZero';

export default function (props) {

	let wikiContents = null;
	if(props.data.format === "gfm") {
		wikiContents = (
			<RoyalMarkdown>
				{props.data.contents}
			</RoyalMarkdown>
		)
	}
	else {
		wikiContents = (
			<ErrorBox error={new Error(`Unknown wiki format: ${props.data.format}`)}/>
		)
	}

	if(props.full) {
		return (
			<Panel>
				<HZero>{props.data.title}</HZero>
				{wikiContents}
			</Panel>
		);
	}
	else {
		return (
			<Panel title={<a href={`/w/${props.data.page_id}`}>{props.data.title}</a>}>
				{wikiContents}
			</Panel>
		)
	}
}
