import Avatar from '../Avatar';
import Link from '../Link';

export default function (props) {
	return (
		<Link href={`/u/${props.data.uid}`}>
			<Avatar data={props.data}/> {props.children}
		</Link>
	);
}
