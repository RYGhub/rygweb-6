import Avatar from './Avatar';
import Link from '../Dynamic/Link';
import BaseLink from './BaseLink';

export default function (props) {
	return (
		<BaseLink href={`/u/${props.data.uid}`}>
			<Avatar data={props.data}/> {props.children}
		</BaseLink>
	);
}
