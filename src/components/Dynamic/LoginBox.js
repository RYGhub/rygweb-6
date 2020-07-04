import {
	Box, FormButton, FormInput,
	getEventValue, Panel,
	royalnetApiRequest,
	RoyalnetInstanceUrl,
	RoyalnetLoginStatus, Validity
} from 'bluelib';
import { useContext, useState } from 'preact/hooks';
import ErrorBox from '../Static/ErrorBox';
import useFormUsername from '../../hooks/useFormUsername';
import useFormPassword from '../../hooks/useFormPassword';
import { route } from 'preact-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AnyLink from './Link';

export default function (props) {
	const [username, setUsername, usernameStatus] = useFormUsername();
	const [password, setPassword, passwordStatus] = useFormPassword();
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

	const [loginWorking, setLoginWorking] = useState(false);
	const [loginError, setLoginError] = useState(null);

	if(loginStatus !== null) {
		return <ErrorBox error={new Error(`Sei già loggato come ${loginStatus.user.username}.`)}/>
	}

	function login() {
		setLoginWorking(true);
		royalnetApiRequest(instanceUrl, "POST", "/api/auth/login/royalnet/v1", {
			username: username,
			password: password
		}).then((data) => {
			props.onLogin(data);
			route("/");
		}).catch((err) => {
			setLoginError(err);
		}).finally(() => {
			setLoginWorking(false);
		})
	}

	let loginValidity = {};
	if(loginWorking) {
		loginValidity = {
			icon: <FontAwesomeIcon icon={faSpinner} pulse={true}/>
		}
	}
	else if(loginError) {
		loginValidity = {
			validity: Validity.ERROR,
				icon: <FontAwesomeIcon icon={faExclamationCircle}/>,
			message: loginError.message
		}
	}

	return (
		<Panel title={"Login"}>
			<p>
				Stai facendo il login su <code>{instanceUrl}</code>.<br/>
				<small>Vuoi usare <a href={"/instance"}>un'istanza diversa</a>?</small>
			</p>
			<p>
				<FormInput type={"text"} name={"username"} label={"Username"} onChange={getEventValue(setUsername)} validity={usernameStatus} value={username}/>
				<FormInput type={"password"} label={"Password"} onChange={getEventValue(setPassword)} validity={passwordStatus} value={password}/>
				<FormButton label={"Login"} onClick={login} disabled={loginWorking} validity={loginValidity}>Login</FormButton>
			</p>
			<p>
				<small>Facendo il login, verranno salvate nel tuo browser <AnyLink href={`${instanceUrl}/docs#operations-auth-ApiAuthLoginRoyalnetStar_post`}>alcune informazioni</AnyLink> relative al tuo account, permettendoti di non rifare il login per un po' di tempo.</small>
			</p>
		</Panel>
	);
}
