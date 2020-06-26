import { useContext } from 'preact/hooks';
import { RoyalnetLoginStatus } from 'bluelib';
import Link from './Link';
import HeaderIcon from '../Static/HeaderIcon';
import BaseLink from '../Static/BaseLink';

export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);

	if(loginStatus === null) {
		return (
			<Link href={"/login"}>
				Login
				<HeaderIcon src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={" 👤"}/>
			</Link>
		);
	}
	else {
		return (
			<BaseLink href={`/u/${loginStatus.user.uid}`}>
				{loginStatus.user.username}
				<HeaderIcon src={loginStatus ? loginStatus.user.avatar_url : "https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={" 👤"}/>
			</BaseLink>
		);
	}
}
