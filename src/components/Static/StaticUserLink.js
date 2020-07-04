import Avatar from './Avatar';
import { BaseLink } from 'bluelib';

export default function (props) {
	return (
		<BaseLink href={`/u/${props.data.uid}`}>
			<Avatar data={props.data}/> {props.children}
		</BaseLink>
	);
}
