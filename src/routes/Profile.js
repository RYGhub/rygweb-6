import { useContext } from 'preact/hooks';
import { Panel, RoyalnetLoginStatus, Section, useRoyalnetData } from 'bluelib';
import LogoutBox from '../components/Dynamic/LogoutBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ErrorBox from '../components/Static/ErrorBox';
import Avatar from '../components/Static/Avatar';
import ChangePasswordBox from '../components/Dynamic/ChangePasswordBox';
import ChangeAvatarBox from '../components/Dynamic/ChangeAvatarBox';
import LinkedAccountsBox from '../components/Static/LinkedAccountsBox';
import ChangeBioBox from '../components/Dynamic/ChangeBioBox';

export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);
	const [userData, userError, refresh] = useRoyalnetData("GET", "/api/user/ryg/v2", {
		uid: props.uid
	});

	if(userError !== undefined) {
		return (
			<ErrorBox error={userError}/>
		);
	}

	if(userData === undefined) {
		return (
			<h1><Avatar/> <FontAwesomeIcon icon={faSpinner} pulse={true}/></h1>
		)
	}


	let settings = null;
	if(loginStatus) {
		// noinspection EqualityComparisonWithCoercionJS
		if(loginStatus.user.uid == props.uid) {
			settings = (
				<Fragment>
					<hr/>
					<h1>
						Impostazioni
					</h1>
					<ChangeBioBox refresh={refresh} initial={userData.bio ? userData.bio.contents : ""}/>
					<ChangeAvatarBox currentAvatar={loginStatus.user.avatar_url}/>
					<Section>
						<ChangePasswordBox/>
						<LogoutBox logout={props.logout}/>
					</Section>
				</Fragment>
			)
		}
	}

	let bioBox = null;
	if(userData.bio) {
		bioBox = (
			<Panel title={"Bio"}>
				{userData.bio.contents}
			</Panel>
		)
	}

	return (
		<div>
			<h1>
				<Avatar data={userData}/> {userData.username}
			</h1>
			{bioBox}
			<LinkedAccountsBox data={userData}/>
			{settings}
		</div>
	);
}
