import {
	FormButton,
	FormInput,
	getEventValue,
	Panel,
	royalnetApiRequest,
	RoyalnetInstanceUrl, RoyalnetLoginStatus,
	Validity
} from 'bluelib';
import useFormPassword from '../../hooks/useFormPassword';
import { useContext, useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import useFormChangePassword from '../../hooks/useFormChangePassword';

export default function (props) {
	const [password, setPassword, passwordStatus] = useFormChangePassword();
	const [validity, setValidity] = useState({});
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

	function change() {
		setValidity({
			validity: Validity.DISABLED,
			icon: <FontAwesomeIcon icon={faSpinner} pulse={true}/>
		});
		royalnetApiRequest(instanceUrl, "PUT", "/api/user/passwd/v1", {
			new_password: password,
			token: loginStatus.token
		}).then((data) => {
			setValidity({
				validity: Validity.OK,
				icon: <FontAwesomeIcon icon={faCheck}/>,
				message: `Password cambiata con successo! Sono state disconnesse ${data.revoked_tokens} altr${data.revoked_tokens !== 1 ? 'e' : 'a'} session${data.revoked_tokens !== 1 ? 'i' : 'e'}.`,
			});
		}).catch((err) => {
			setValidity({
				validity: Validity.ERROR,
				icon: <FontAwesomeIcon icon={faExclamationCircle}/>,
				message: err.message
			});
		})
	}

	return (
		<Panel title={"Cambia password"}>
			<p>
				Cambiare password ti disconnetterà da tutte le sessioni tranne questa. Sei sicuro di voler procedere?
			</p>
			<p>
				<FormInput type={"password"} name={"password"} label={"Nuova password"} onChange={getEventValue(setPassword)} validity={passwordStatus} value={password}/>
				<FormButton label={"Cambia"} onClick={change} disabled={validity.disabled || password.length === 0} validity={validity}>Cambia password</FormButton>
			</p>
		</Panel>
	);
}
