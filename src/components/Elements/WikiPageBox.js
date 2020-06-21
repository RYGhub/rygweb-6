import "easymde/dist/easymde.min.css";
import "../../styles/override-easymde.less";

import { Box, getEventValue, HInput, useRoyalnetData } from 'bluelib';
import RoyalMarkdown from '../Rendering/RoyalMarkdown';
import ErrorBox from './ErrorBox';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'preact/hooks';
import style from "./WikiPageBox.less";
import SimpleMDEEditor from 'react-simplemde-editor';


export const WikiStages = Object.freeze({
	VIEWING: 0,
	EDITING: 1,
	PREVIEWING: 2,
});

export default function (props) {
	const [data, error, refresh] = useRoyalnetData("GET", "/api/wiki/get/v1", {"id": props.id});

	if(error) {
		return <ErrorBox error={error}/>
	}

	if(data === undefined) {
		return <Box><FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading Wiki...</Box>
	}

	const [tempTitle, setTempTitle] = useState(data.title);
	const [tempContents, setTempContents] = useState(data.contents);
	const [tempFormat, setTempFormat] = useState(data.format);
	const [tempTheme, setTempTheme] = useState(data.theme);

	if(props.stage === undefined || props.stage === WikiStages.VIEWING) {
		return (
			<Box>
				<h1 class={style.maintitle}>
					<a href={`/w/${data.page_id}`}>{data.title}</a>
				</h1>
				<RoyalMarkdown>
					{data.contents}
				</RoyalMarkdown>
			</Box>
		);
	}
	else if(props.stage === WikiStages.EDITING) {
		return (
			<Box>
				<HInput type={"text"} label={"Title"} value={tempTitle} onChange={getEventValue(setTempTitle)}/>
				<HInput type={"text"} label={"Format"} value={tempFormat} onChange={getEventValue(setTempFormat)}/>
				<SimpleMDEEditor
					value={tempContents}
					onChange={setTempContents}
					options={{
						spellChecker: false,
						blockStyles: {
							"bold": "**",
							"code": "```",
							"italic": "_"
						},
						indentWithTabs: false,
						toolbar: ["bold", "italic", "|", "heading-smaller", "heading-bigger", "|", "code", "quote", "unordered-list", "ordered-list", "|", "link", "image", "table", "horizontal-rule", "|", "guide"]
					}}/>
				<HInput type={"text"} label={"Theme"} value={tempTheme} onChange={getEventValue(setTempTheme)}/>
			</Box>
		)
	}
	else if(props.stage === WikiStages.PREVIEWING) {
		return (
			<Box>
				<h1 class={style.maintitle}>
					{tempTitle}
				</h1>
				<RoyalMarkdown>
					{tempContents}
				</RoyalMarkdown>
			</Box>
		)
	}
	else {
		return <ErrorBox error={new Error("Unknown WikiStage.")}/>
	}
}
