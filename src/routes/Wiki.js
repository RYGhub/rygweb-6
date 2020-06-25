import WikiBox from '../components/Elements/WikiBox';
import { Box } from 'bluelib';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faSave, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function (props) {
	return (
		<div>
			<Box>
				<button disabled={false}><FontAwesomeIcon icon={faEye}/> Visualizza</button>
				<button disabled={true}><FontAwesomeIcon icon={faPencilAlt}/> Modifica</button>
				<button disabled={true}><FontAwesomeIcon icon={faSearch}/> Anteprima</button>
				<button disabled={true}><FontAwesomeIcon icon={faSave}/> Salva</button>
			</Box>
			<WikiBox pageId={props.pageId}/>
		</div>
	);
}
