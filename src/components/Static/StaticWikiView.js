import { Panel } from 'bluelib';
import RoyalMarkdown from './RoyalMarkdown';
import ErrorBox from './ErrorBox';

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
				<h1>{props.data.title}</h1>
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
