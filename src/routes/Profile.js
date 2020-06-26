import { useContext } from 'preact/hooks';
import { RoyalnetLoginStatus, useRoyalnetData } from 'bluelib';
import LogoutBox from '../components/Elements/LogoutBox';
import MainTitle from '../components/Elements/MainTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ErrorBox from '../components/Elements/ErrorBox';
import Avatar from '../components/Elements/Avatar';
import HZero from '../components/Elements/HZero';

export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);
	const [userData, userError] = useRoyalnetData("GET", "/api/user/ryg/v2", {
		uid: props.uid
	});

	let logoutBox = null;
	if(loginStatus) {
		// noinspection EqualityComparisonWithCoercionJS
		if(loginStatus.user.uid == props.uid) {
			logoutBox = <LogoutBox logout={props.logout}/>
		}
	}

	if(userError !== undefined) {
		return (
			<ErrorBox error={userError}/>
		);
	}

	if(userData === undefined) {
		return (
			<h0><Avatar src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={""}/><FontAwesomeIcon icon={faSpinner} pulse={true}/></h0>
		)
	}

	return (
		<div>
			<HZero>
				<Avatar data={userData}/> {userData.username}
			</HZero>
			{logoutBox}
		</div>
	);
}
