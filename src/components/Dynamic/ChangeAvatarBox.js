import useUrl from '../../hooks/useUrl';
import {
	FormButton,
	FormInput,
	getEventValue,
	Panel,
	royalnetApiRequest,
	RoyalnetInstanceUrl,
	RoyalnetLoginStatus,
	Validity
} from 'bluelib';
import { useContext, useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../Static/Avatar';
import style from './ChangeAvatarBox.less';
import UserLink from './UserLink';

export default function (props) {
	let defaultAvatar = props.currentAvatar ? props.currentAvatar : "";

	const [avatarUrl, setAvatarUrl, avatarUrlStatus] = useUrl(defaultAvatar);
	const [validity, setValidity] = useState({});
	const instanceUrl = useContext(RoyalnetInstanceUrl);
	const loginStatus = useContext(RoyalnetLoginStatus);

	function save() {
		setValidity({
			validity: Validity.DISABLED,
			icon: <FontAwesomeIcon icon={faSpinner} pulse={true}/>
		});
		royalnetApiRequest(instanceUrl, "PUT", "/api/user/avatar/v2", {
			avatar_url: avatarUrl,
			token: loginStatus.token
		}).then((data) => {
			setValidity({
				validity: Validity.OK,
				icon: <FontAwesomeIcon icon={faCheck}/>,
				message: `Avatar cambiato con successo! Per vedere il nuovo avatar ovunque, ricarica la pagina.`,
			});
		}).catch((err) => {
			setValidity({
				validity: Validity.ERROR,
				icon: <FontAwesomeIcon icon={faExclamationCircle}/>,
				message: err.message
			});
		})
	}

	let displayedAvatarUrl = null;
	if(avatarUrlStatus.validity === Validity.OK) {
		displayedAvatarUrl = avatarUrl;
	}

	return (
		<Panel title={"Cambia avatar"}>
			<p>
				<Avatar class={style.preview} src={displayedAvatarUrl}/>
			</p>
			<p>
				<FormInput type={"text"} name={"avatar_url"} label={"URL"} onChange={getEventValue(setAvatarUrl)} validity={avatarUrlStatus} value={avatarUrl}/>
				<FormButton label={"Salva"} onClick={save} disabled={avatarUrlStatus.validity !== Validity.OK} validity={validity}>Salva modifiche</FormButton>
			</p>
			<blockquote>
				Non sai dove hostare il tuo avatar? Prova <a href={"https://imgur.com/upload?beta"}>imgur</a>!
			</blockquote>
			<blockquote>
				<UserLink uid={29}>Viktya</UserLink> mi ha fatto scoprire che funzionano anche le gif. Sbizzaritevi!
			</blockquote>
		</Panel>
	);
}
