import { Box, Panel, royalnetApiRequest, RoyalnetInstanceUrl, RoyalnetLoginStatus, useRoyalnetData } from 'bluelib';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faEye, faPencilAlt, faSave, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'preact/hooks';
import LeftRight from '../Static/LeftRight';
import useWikiEdit from '../../hooks/useWikiEdit';
import StaticWikiView from '../Static/StaticWikiView';
import StaticWikiEdit from '../Static/StaticWikiEdit';
import { route } from 'preact-router';

export default function (props) {
	const [mode, setMode] = useState(1);
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

	const editing = useWikiEdit({
		category: "",
		title: "",
		contents: "",
		format: "gfm",
		role_to_view: "*",
		role_to_edit: "member",
	});

	const editText = (<span><FontAwesomeIcon icon={faPencilAlt}/> Modifica</span>);
	const previewText = (<span><FontAwesomeIcon icon={faSearch}/> Anteprima</span>);
	const saveText = (<span><FontAwesomeIcon icon={faCloudUploadAlt}/> Pubblica</span>);

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
		royalnetApiRequest(instanceUrl, "POST", "/api/wiki/v2", {
			token: loginStatus.token,
			...editing.value
		}).then((data) => {
			route(`/w/${data.page_id}`)
		})
	}

	let left = null;
	let center = null;
	let right = null;
	let page = null;

	if(mode === 1) {
		center = (
			<b>{editText}</b>
		);
		right = (
			previewBtn
		);
		page = (
			<StaticWikiEdit {...editing}/>
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
			<StaticWikiView full={true} data={editing.value}/>
		);
	}

	let topBar = (
		<Box>
			<LeftRight left={left} center={center} right={right}/>
		</Box>
	);

	let lastEdit = (
		<Box>
			<i>Stai creando una nuova pagina.</i>
		</Box>
	);

	return (
		<div>
			{topBar}
			{page}
			{lastEdit}
		</div>
	);
}
