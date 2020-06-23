import { useState } from 'preact/hooks';
import useFormValidator from './useFormValidator';

export default function() {
	const [username, setUsername] = useState("");

	let filteredUsername = username.replace(/[^A-Za-z]/g, "");

	const usernameStatus = useFormValidator(filteredUsername, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({
				validity: null,
				message: ""
			});
			return;
		}

		if(!Boolean(/^[A-Za-z]+$/.test(value))) {
			setStatus({
				validity: false,
				message: "L'username che hai inserito non è valido."
			});
			return;
		}

		setStatus({
			validity: true,
			message: "Sembra OK!"
		});
	});

	return [filteredUsername, setUsername, usernameStatus]
}
