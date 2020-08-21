import { useState } from 'preact/hooks';
import { useFormValidator, Validity } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function(defaultValue) {
	const [url, setUrl] = useState(defaultValue);
	const urlStatus = useFormValidator(url, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({
				validity: Validity.NONE,
			});
			return;
		}

		if(!Boolean(/^https?:\/\/.*?[^/]$/.test(value))) {
			setStatus({
				validity: Validity.ERROR,
				icon: <FontAwesomeIcon icon={faExclamationCircle}/>
			});
			return;
		}

		setStatus({
			validity: Validity.OK,
			icon: <FontAwesomeIcon icon={faCheck}/>
		})

	});

	return [url, setUrl, urlStatus];
}
