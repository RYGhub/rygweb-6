import { Box, getEventValue, HButton, HInput, RoyalnetLoginStatus } from 'bluelib';
import useFormInstanceUrl from '../../hooks/useFormInstanceUrl';
import { useContext } from 'preact/hooks';
import ErrorBox from './ErrorBox';

export default function (props) {
	const [instanceUrl, setInstanceUrl, instanceUrlStatus] = useFormInstanceUrl();
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(loginStatus !== null) {
		return <ErrorBox error={new Error("Non puoi cambiare istanza mentre sei loggato.")}/>
	}

	function change() {
		props.onConfirm(instanceUrl);
	}

	return (
		<Box>
			<HInput type={"text"} label={"Istanza"} onChange={getEventValue(setInstanceUrl)} validity={instanceUrlStatus.validity} value={instanceUrl}/>
			<HButton label={""} onClick={change} disabled={!instanceUrlStatus.validity}>Cambia</HButton>
		</Box>
	);
}
