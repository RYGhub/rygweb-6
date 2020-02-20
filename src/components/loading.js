import { Component } from 'preact';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class Loading extends Component {
	render() {
		return (
			<span>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> {this.props.text ? this.props.text : "Loading..."}
			</span>
		);
	}
}
