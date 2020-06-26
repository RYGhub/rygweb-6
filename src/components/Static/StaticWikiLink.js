import { useContext } from 'preact/hooks';
import { RoyalnetLoginStatus } from 'bluelib';
import BaseLink from './BaseLink';
import { canView } from '../../utils/wikiPermissions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLock } from '@fortawesome/free-solid-svg-icons';

export default function (props) {
	let loginStatus = useContext(RoyalnetLoginStatus);

	if(!canView(loginStatus, props.data)) {
		return (
			<BaseLink disabled={true}>
				<FontAwesomeIcon icon={faLock}/> {props.children ? props.children : props.data.title}
			</BaseLink>
		)
	}

	return (
		<BaseLink href={`/w/${props.data.page_id}`}>
			<FontAwesomeIcon icon={faBook}/> {props.children ? props.children : props.data.title}
		</BaseLink>
	);
}
