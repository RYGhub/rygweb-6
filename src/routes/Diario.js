import { LeftRight, Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import StaticDiarioEntry from '../components/Static/StaticDiarioEntry';
import { useState } from 'preact/hooks';
import WikiExisting from '../components/Dynamic/WikiExisting';

export default function (props) {
	const [allEntries, error] = useRoyalnetData("GET", "/api/diario/all/v2", {});
	const [index, setIndex] = useState(0);
	const [length, setLength] = useState(100);

	let content = null;
	let displayedEntries = [];

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
		const reversedEntries = allEntries.slice();
		reversedEntries.reverse();

		displayedEntries = reversedEntries.slice(index, index+length);

		content = (
			<Panel {...props}>
				{displayedEntries.map(entry => {return (
					<StaticDiarioEntry data={entry}/>
				)})}
			</Panel>
		);
	}

	const backButton = (
		<button disabled={allEntries === undefined || index <= 0} onClick={() => setIndex(index-length)}>
			<FontAwesomeIcon icon={faChevronLeft}/> Precedenti {length}
		</button>
	);
	const forwardButton = (
		<button disabled={allEntries === undefined || displayedEntries.length < length} onClick={() => setIndex(index+length)}>
			<FontAwesomeIcon icon={faChevronRight}/> Successive {length}
		</button>
	);
	const showAll = (
		<button disabled={allEntries === undefined} onClick={() => setLength(allEntries.length)}>
			<FontAwesomeIcon icon={faPlus}/> Mostra tutte
		</button>
	);

	return (
		<div>
			<WikiExisting pageId={29}/>
			<Panel>
				<LeftRight
					left={backButton}
					center={showAll}
					right={forwardButton}
				/>
			</Panel>
			{content}
			<Panel>
				<LeftRight
					left={backButton}
					center={showAll}
					right={forwardButton}
				/>
			</Panel>
		</div>
	)
}
