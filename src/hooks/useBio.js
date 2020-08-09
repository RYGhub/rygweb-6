import { useState } from 'preact/hooks';
import {useFormValidator} from 'bluelib';
import { Validity } from 'bluelib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function(defaultValue) {
	const [bio, setBio] = useState(defaultValue);
	const bioStatus = useFormValidator(bio, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({
				validity: Validity.NONE,
			});
			return;
		}

		if(value.length >= 200) {
			setStatus({
				validity: Validity.WARNING,
				icon: <FontAwesomeIcon icon={faExclamationTriangle}/>,
				text: "Non pensi che la tua bio sia un po' lunga? Prova a farla un po' più corta..."
			});
			return;
		}

		setStatus({
			validity: Validity.OK,
			icon: <FontAwesomeIcon icon={faCheck}/>
		})

	});

	return [bio, setBio, bioStatus];
}
