import {
	Box,
	getEventValue,
	HButton,
	HInput,
	royalnetApiRequest,
	RoyalnetInstanceUrl,
	RoyalnetLoginStatus
} from 'bluelib';
import { useContext, useState } from 'preact/hooks';
import ErrorBox from './ErrorBox';
import useFormUsername from '../../hooks/useFormUsername';
import useFormPassword from '../../hooks/useFormPassword';
import { route } from 'preact-router';

export default function (props) {
	const [username, setUsername, usernameStatus] = useFormUsername();
	const [password, setPassword, passwordStatus] = useFormPassword();
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

	const [loginWorking, setLoginWorking] = useState(false);
	const [loginError, setLoginError] = useState(null);

	if(loginStatus !== null) {
		return <ErrorBox error={new Error("Sei già loggato come .")}/>
	}

	function login() {
		console.log("Logging in...");
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

	return (
		<Box>
			<HInput type={"text"} label={"Username"} onChange={getEventValue(setUsername)} validity={usernameStatus.validity} value={username}/>
			<HInput type={"password"} label={"Password"} onChange={getEventValue(setPassword)} validity={passwordStatus.validity} value={password}/>
			<HButton label={""} onClick={login} disabled={!(usernameStatus.validity === false || passwordStatus.validity === false || !loginWorking)} validity={loginError}>Login</HButton>
		</Box>
	);
}
