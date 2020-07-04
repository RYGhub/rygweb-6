import {
	Box,
	FormButton,
	Panel,
	royalnetApiRequest,
	RoyalnetInstanceUrl,
	RoyalnetLoginStatus,
	useRoyalnetData, Validity
} from 'bluelib';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faSave, faSearch, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'preact/hooks';
import { LeftRight } from 'bluelib';
import ErrorBox from '../Static/ErrorBox';
import useWikiEdit from '../../hooks/useWikiEdit';
import StaticWikiView from '../Static/StaticWikiView';
import StaticWikiEdit from '../Static/StaticWikiEdit';
import StaticUserLink from '../Static/StaticUserLink';
import { route } from 'preact-router';
import { BoxColors } from 'bluelib/dist/index.modern';
import { canDelete, canEdit } from '../../utils/wikiPermissions';

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

	const deleteText = (<span><FontAwesomeIcon icon={faTrash}/> Elimina</span>);
	const viewText = (<span><FontAwesomeIcon icon={faEye}/> Visualizza</span>);
	const editText = (<span><FontAwesomeIcon icon={faPencilAlt}/> Modifica</span>);
	const previewText = (<span><FontAwesomeIcon icon={faSearch}/> Anteprima</span>);
	const saveText = (<span><FontAwesomeIcon icon={faSave}/> Salva</span>);


	const deleteBtn = (
		<button disabled={!canDelete(loginStatus)} onClick={() => {setMode(-1)}}>
			{deleteText}
		</button>
	);
	const viewBtn = (
		<button onClick={() => {setMode(0)}}>
			{viewText}
		</button>
	);
	const editBtn = (
		<button disabled={!canEdit(loginStatus, wikiData)} onClick={() => {setMode(1)}}>
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

	function del() {
		royalnetApiRequest(instanceUrl, "DELETE", "/api/wiki/v2", {
			page_id: props.pageId,
			token: loginStatus.token
		}).then((data) => {
			route("/");
		})
	}

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

	if(mode === -1) {
		center = (
			<b>{deleteText}</b>
		);
		right = (
			viewBtn
		);
		page = (
			<Panel color={BoxColors.ORANGE}>
				Sei sicuro di voler eliminare tutte le revisioni della pagina <b>{wikiData.title}</b>? È un'operazione irreversibile!
				<FormButton label={"Elimina"} onClick={del}><FontAwesomeIcon icon={faTrash}/> SICURO?!</FormButton>
			</Panel>
		);
	}
	if(mode === 0) {
		left = (
			deleteBtn
		);
		center = (
			<b>{viewText}</b>
		);
		right = (
			editBtn
		);
		page = (
			<StaticWikiView full={props.full} data={wikiData}/>
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

	let topBar = null;
	if(props.full) {
		topBar = (
			<Box>
				<LeftRight left={left} center={center} right={right}/>
			</Box>
		);
	}

	let lastEdit = null;
	if(props.full) {
		lastEdit = (
			<Box>
				Ultima modifica di <StaticUserLink data={wikiData.author}>{wikiData.author.username}</StaticUserLink> alle <time dateTime={wikiData.timestamp}>{new Date(wikiData.timestamp).toLocaleString()}</time>.
			</Box>
		);
	}

	return (
		<div>
			{topBar}
			{page}
			{lastEdit}
		</div>
	);
}
