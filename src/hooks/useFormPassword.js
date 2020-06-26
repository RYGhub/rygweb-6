import { useState } from 'preact/hooks';
import {useFormValidator} from 'bluelib';
import { Validity } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faQuestion } from '@fortawesome/free-solid-svg-icons';

export default function() {
	const [password, setPassword] = useState("");
	const passwordStatus = useFormValidator(password, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({});
			return;
		}

		setStatus({
			validity: Validity.OK,
			icon: <FontAwesomeIcon icon={faQuestion}/>
		});
	});

	return [password, setPassword, passwordStatus]
}
