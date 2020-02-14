import { Component } from 'preact';
import style from './pagebuttons.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default class PageButtons extends Component {
	render() {
		return (
			<span>
				<button onClick={this.props.onPreviousClick}><FontAwesomeIcon icon={faAngleLeft}/></button>
				<button onClick={this.props.onNextClick}><FontAwesomeIcon icon={faAngleRight}/></button>
			</span>
		);
	}
}
