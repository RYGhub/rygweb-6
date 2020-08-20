import { concatClass } from 'bluelib';
import style from './Avatar.less';

export default function (props) {
	let avatar_url;
	if(props.src) {
		avatar_url = props.src;
	}
	else if(props.data && props.data.avatar_url) {
		avatar_url = props.data.avatar_url;
	}
	else {
		avatar_url = "https://ryg.s3.fr-par.scw.cloud/logos/blue/groups/no-avatar.png";
	}

	return (
		<img alt={""} src={avatar_url} class={concatClass(style.avatar, props.class)}/>
	);
}
