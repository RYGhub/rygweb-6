import { useContext, useState } from 'preact/hooks';
import useFormValidator from './useFormValidator';
import { royalnetApiRequest, RoyalnetInstanceUrl, Validity } from 'bluelib';

export default function() {
	const defaultInstanceUrl = useContext(RoyalnetInstanceUrl);
	const [instanceTesterAbort, setInstanceTesterAbort] = useState(null);
	const [instanceUrl, setInstanceUrl] = useState(defaultInstanceUrl);
	const instanceUrlStatus = useFormValidator(instanceUrl, (value, setStatus) => {
		if(value.length === 0) {
			setStatus({
				validity: Validity.NONE,
				message: ""
			});
			return;
		}

		if(!Boolean(/^https?:\/\/.*?[^/]$/.test(value))) {
			setStatus({
				validity: Validity.ERROR,
				message: "L'URL che hai inserito non è valido."
			});
			return;
		}

		if(instanceTesterAbort !== null) {
			instanceTesterAbort.abort();
		}
		let abort = new AbortController();
		setInstanceTesterAbort(abort);

		royalnetApiRequest(value, "GET", "/api/royalnet/version/v1", undefined, abort.signal).then((data) => {
			if(value === instanceUrl) {
				setStatus({
					validity: Validity.OK,
					message: `Royalnet ${data["semantic"]}`
				});
			}
			else {
				console.log("wtf?")
			}
		}).catch((err) => {
			if(value === instanceUrl) {
				setStatus({
					validity: Validity.ERROR,
					message: "Non sembra esserci nessuna istanza a quell'URL... Sei sicuro che quella sia un'istanza di Royalnet?"
				});
			}
		});
		setStatus({
			validity: Validity.NONE,
			message: ""
		});
	});

	return [instanceUrl, setInstanceUrl, instanceUrlStatus];
}
