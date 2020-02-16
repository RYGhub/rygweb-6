import { Component } from 'preact';
import style from './loading.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class Loading extends Component {
	render() {
		return (
			<span>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading...
			</span>
		);
	}
}
