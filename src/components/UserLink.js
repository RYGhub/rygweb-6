import { useRoyalnetData } from 'bluelib';
import Link from './Link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Avatar from './Avatar';


export default function (props) {
	const data = useRoyalnetData("GET", "/api/user/get/ryg/v1", Object.freeze({"id": props.uid}));

	let contents = props.children;

	if(data === undefined) {
		return <Link href={`/profile/${props.uid}`}>
			<FontAwesomeIcon icon={faSpinner} pulse={true}/> {contents ? contents : props.uid}
		</Link>
	}

	let avatar = <Avatar src={data.avatar_url ? data.avatar_url : "https://combo.steffo.eu/open/ryg/GenericUser.png"}/>;

	return (
		<Link href={`/profile/${data.uid}`}>
			{avatar} {contents ? contents : data.username}
		</Link>
	);
}
