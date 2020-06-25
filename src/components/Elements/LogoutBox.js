import { FormButton, Panel } from 'bluelib';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import AnyLink from './Links/AnyLink';

export default function (props) {
	const [logoutWorking, setLogoutWorking] = useState(false);

	function logout() {
		console.debug("Logging out...");
		setLogoutWorking(true);
		props.logout();
		route("/");
	}

	let logoutValidity = {};
	if(logoutWorking) {
		logoutValidity = {
			icon: <FontAwesomeIcon icon={faSpinner} pulse={true}/>
		}
	}

	return (
		<Panel title={"Logout"}>
			<blockquote>
				Senta, <AnyLink href={"https://www.youtube.com/watch?v=KoC-M5yBKQ4"}>dottoressa Frinzi</AnyLink>...
			</blockquote>
			<p>
				<FormButton label={"Logout"} onClick={logout} disabled={logoutWorking} validity={logoutValidity}>Esci da questo posto di ♥♥♥♥♥</FormButton>
			</p>
		</Panel>
	);
}
