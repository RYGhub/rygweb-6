import {
	FormButton,
	FormInput,
	getEventValue,
	Panel, royalnetApiRequest,
	RoyalnetInstanceUrl,
	RoyalnetLoginStatus,
	Validity
} from 'bluelib';
import { useContext, useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import useBio from '../../hooks/useBio';
import Link from './Link';

export default function (props) {
	const [bio, setBio, bioStatus] = useBio(props.initial);
	const [validity, setValidity] = useState({});
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

	function save() {
		setValidity({
			validity: Validity.DISABLED,
			icon: <FontAwesomeIcon icon={faSpinner} pulse={true}/>
		});
		royalnetApiRequest(instanceUrl, "PUT", "/api/bio/v2", {
			contents: bio,
			token: loginStatus.token
		}).then((data) => {
			setValidity({
				validity: Validity.OK,
				icon: <FontAwesomeIcon icon={faCheck}/>,
				message: `Bio cambiata con successo!`,
			});
			props.refresh();
		}).catch((err) => {
			setValidity({
				validity: Validity.ERROR,
				icon: <FontAwesomeIcon icon={faExclamationCircle}/>,
				message: err.message
			});
		})
	}

	return (
		<Panel title={"Cambia bio"}>
			<p>
				La tua bio apparirà sul tuo profilo e nell'<Link href={"/u"}>elenco membri Royal Games</Link>.
			</p>
			<p>
				<FormInput type={"text"} name={"bio"} label={"Bio"} onChange={getEventValue(setBio)} validity={bioStatus} value={bio}/>
				<FormButton label={"Salva"} onClick={save} disabled={bioStatus.validity === Validity.ERROR} validity={validity}>Salva modifiche</FormButton>
			</p>
		</Panel>
	);
}
