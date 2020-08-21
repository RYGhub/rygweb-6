import { useState } from 'preact/hooks';
import { useFormValidator, Validity } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function() {
	const [password, setPassword] = useState("");
	const passwordStatus = useFormValidator(password, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({
				validity: Validity.NONE,
			});
			return;
		}

		if(value.length < 12) {
			setStatus({
				validity: Validity.WARNING,
				icon: <FontAwesomeIcon icon={faExclamationTriangle}/>,
				message: "La password è un po' corta... Cerca di farla lunga almeno 12 caratteri.",
			});
			return;
		}

		setStatus({
			validity: Validity.OK,
			icon: <FontAwesomeIcon icon={faCheck}/>
		});
	});

	return [password, setPassword, passwordStatus]
}
