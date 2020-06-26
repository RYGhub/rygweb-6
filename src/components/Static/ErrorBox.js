import { Box, BoxColors } from 'bluelib';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function (props) {
	return (
		<Box color={BoxColors.RED}>
			<FontAwesomeIcon icon={faExclamationCircle}/> {props.error.toString()}
		</Box>
	);
}
