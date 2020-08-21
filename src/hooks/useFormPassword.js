import { useState } from 'preact/hooks';
import { useFormValidator, Validity } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

export default function() {
	const [password, setPassword] = useState("");
	const passwordStatus = useFormValidator(password, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({
				validity: Validity.NONE,
			});
			return;
		}

		setStatus({
			validity: Validity.NONE,
			icon: <FontAwesomeIcon icon={faKey}/>
		});
	});

	return [password, setPassword, passwordStatus]
}
