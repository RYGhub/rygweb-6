import { Component } from 'preact';
import HButton from './hbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Error from '../error';

export default class HButtonOnce extends Component {
	render() {
		if(this.props.status === "waiting") {
			return <HButton label={<span>{this.props.label}</span>} onClick={this.props.onClick}/>;
		}
		else if(this.props.status === "running") {
			return <HButton label={<span><FontAwesomeIcon icon={faSpinner} pulse={true}/> {this.props.label}</span>} disabled={true}/>;
		}
		else if(this.props.status === "done") {
			return <HButton label={<span><FontAwesomeIcon icon={faCheck}/> {this.props.label}</span>} disabled={true}/>;
		}
		else {
			return <Error>Invalid status for HButtonOnce: {this.props.status.toString()}</Error>
		}
	}
}
