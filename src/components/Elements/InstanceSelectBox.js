import { Box, FormButton, FormInput, getEventValue, RoyalnetLoginStatus, Validity } from 'bluelib';
import useFormInstanceUrl from '../../hooks/useFormInstanceUrl';
import { useContext } from 'preact/hooks';
import ErrorBox from './ErrorBox';
import { route } from 'preact-router';

export default function (props) {
	const [instanceUrl, setInstanceUrl, instanceUrlStatus] = useFormInstanceUrl();
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(loginStatus !== null) {
		return <ErrorBox error={new Error("Non puoi cambiare istanza mentre sei loggato.")}/>
	}

	function change() {
		props.onConfirm(instanceUrl);
		route("/");
	}

	return (
		<Box>
			<FormInput type={"text"} label={"Istanza"} onChange={getEventValue(setInstanceUrl)} validity={instanceUrlStatus} value={instanceUrl}/>
			<FormButton label={"Cambia"} onClick={change} disabled={!instanceUrlStatus.validity === Validity.OK}>Cambia</FormButton>
		</Box>
	);
}
