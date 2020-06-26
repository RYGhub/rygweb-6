import WikiView from './WikiView';
import { Box, Panel, royalnetApiRequest, RoyalnetInstanceUrl, RoyalnetLoginStatus, useRoyalnetData } from 'bluelib';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faEye, faPencilAlt, faSave, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'preact/hooks';
import LeftRight from '../../Layout/LeftRight';
import SimpleMDEEditor from 'react-simplemde-editor';
import ErrorBox from '../ErrorBox';
import WikiEdit from './WikiEdit';
import useWikiEdit from '../../../hooks/useWikiEdit';

export default function (props) {
	const [mode, setMode] = useState(0);
	const [wikiData, wikiError, wikiRefresh] = useRoyalnetData("GET", "/api/wiki/v2", {
		page_id: props.pageId
	});
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

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

	const editing = useWikiEdit(wikiData);
	console.debug(editing);

	const viewText = (<span><FontAwesomeIcon icon={faEye}/> Visualizza</span>);
	const editText = (<span><FontAwesomeIcon icon={faPencilAlt}/> Modifica</span>);
	const previewText = (<span><FontAwesomeIcon icon={faSearch}/> Anteprima</span>);
	const saveText = (<span><FontAwesomeIcon icon={faSave}/> Salva</span>);

	const viewBtn = (
		<button onClick={() => {setMode(0)}}>
			{viewText}
		</button>
	);
	const editBtn = (
		<button onClick={() => {setMode(1)}}>
			{editText}
		</button>
	);
	const previewBtn = (
		<button onClick={() => {setMode(2)}}>
			{previewText}
		</button>
	);
	const saveBtn = (
		<button onClick={() => {save()}}>
			{saveText}
		</button>
	);

	function save() {
		royalnetApiRequest(instanceUrl, "PUT", "/api/wiki/v2", {
			page_id: props.pageId,
			token: loginStatus.token,
			...editing.value
		}).then((data) => {
			wikiRefresh();
			setMode(0);
		})
	}

	let left = null;
	let center = null;
	let right = null;
	let page = null;

	if(mode === 0) {
		center = (
			<b>{viewText}</b>
		);
		right = (
			editBtn
		);
		page = (
			<WikiView full={props.full} data={wikiData}/>
		);
	}
	else if(mode === 1) {
		left = (
			viewBtn
		);
		center = (
			<b>{editText}</b>
		);
		right = (
			previewBtn
		);
		page = (
			<WikiEdit {...editing}/>
		);
	}
	else if(mode === 2) {
		left = (
			editBtn
		);
		center = (
			<b>{previewText}</b>
		);
		right = (
			saveBtn
		);
		page = (
			<WikiView full={props.full} data={editing.value}/>
		);
	}

	let topBar = null;
	if(props.full) {
		topBar = (
			<Box>
				<LeftRight left={left} center={center} right={right}/>
			</Box>
		);
	}

	return (
		<div>
			{topBar}
			{page}
		</div>
	);
}
