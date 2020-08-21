import { useContext, useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RoyalnetInstanceUrl, useRoyalnetData, Validity } from 'bluelib';
import { faCheck, faExclamationCircle, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function() {
	const [username, setUsername] = useState("");
	const [usernameCheckerAbort, setUsernameCheckerAbort] = useState(null);
	const instanceUrl = useContext(RoyalnetInstanceUrl);

	let lowerUsername = username.toLowerCase();
	let filteredUsername = lowerUsername.replace(/[^a-z]/g, "");

	const [aliasData, aliasError] = useRoyalnetData("GET", "/api/user/find/v1", {"alias": filteredUsername});

	let usernameStatus = {};

	if (filteredUsername !== "") {
		if (aliasError !== undefined) {
			usernameStatus = {
				validity: Validity.ERROR,
				icon: <FontAwesomeIcon icon={faExclamationCircle}/>,
				message: "Non esiste nessun utente con questo username."
			}
		}
		else if (aliasData === undefined) {
			usernameStatus = {
				icon: <FontAwesomeIcon icon={faSpinner} pulse={true}/>,
			}
		}
		else if (aliasData.username !== filteredUsername) {
			usernameStatus = {
				validity: Validity.WARNING,
				icon: <FontAwesomeIcon icon={faExclamationTriangle}/>,
				message: <span>Hai sbagliato username! Il tuo username è <b>{aliasData.username}</b>.</span>,
			}
		}
		else {
			usernameStatus = {
				validity: Validity.OK,
				icon: <FontAwesomeIcon icon={faCheck}/>
			}
		}
	}

	return [filteredUsername, setUsername, usernameStatus];
}
