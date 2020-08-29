import { LeftRight, Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import StaticDiarioEntry from '../components/Static/StaticDiarioEntry';
import { useState } from 'preact/hooks';
import WikiExisting from '../components/Dynamic/WikiExisting';

export default function (props) {
	const range = 3;
	const [allEntries, error] = useRoyalnetData("GET", "/api/diario/range/v3", {
		start: Number(props.highlight) - range,
		end: Number(props.highlight) + range + 1,
	});

	let content = null;

	if(error !== undefined) {
		content = (
			<ErrorBox error={error}/>
		);
	}

	else if(allEntries === undefined) {
		content = (
			<Panel>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading...
			</Panel>
		)
	}

	else {
		content = (
			<Panel {...props}>
				{allEntries.map(entry => {return (
					<StaticDiarioEntry data={entry} highlighted={entry.diario_id === Number(props.highlight)}/>
				)})}
			</Panel>
		);
	}

	return (
		<div>
			<WikiExisting pageId={29}/>
			{content}
		</div>
	)
}
