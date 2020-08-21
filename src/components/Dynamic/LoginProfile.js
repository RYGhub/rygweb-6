import { useContext } from 'preact/hooks';
import { RoyalnetLoginStatus } from 'bluelib';
import HeaderIcon from '../Static/HeaderIcon';
import NavbarDiv from '../Static/NavbarDiv';

export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(loginStatus === null) {
		return (
			<NavbarDiv href={"/login"}>
				Login
				<HeaderIcon src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={" 👤"}/>
			</NavbarDiv>
		);
	}
	else {
		return (
			<NavbarDiv href={`/u/${loginStatus.user.uid}`}>
				{loginStatus.user.username}
				<HeaderIcon src={loginStatus ? loginStatus.user.avatar_url : "https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={" 👤"}/>
			</NavbarDiv>
		);
	}
}
