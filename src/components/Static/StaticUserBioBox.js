import { Panel } from 'bluelib';
import StaticUserLink from './StaticUserLink';

export default function(props) {
	return (
		<Panel title={<StaticUserLink data={props.user}>{props.user.username}</StaticUserLink>}>
			{props.user.bio ? props.user.bio.contents : null}
		</Panel>
	);
}