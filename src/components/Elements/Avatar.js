import { concatClass } from 'bluelib';
import style from './Avatar.less';

export default function (props) {
	let avatar_url;
	if(props.src) {
		avatar_url = props.src;
	}
	else if(props.data.avatar_url) {
		avatar_url = props.data.avatar_url;
	}
	else if(props.data.steam && props.data.steam.length > 0 && props.data.steam[0].avatar) {
		avatar_url = props.data.steam[0].avatar;
	}
	else {
		avatar_url = "https://combo.steffo.eu/open/ryg/GenericUser.png";
	}

	return (
		<img alt={""} src={avatar_url} class={concatClass(style.avatar, props.class)}/>
	);
}
