import { Component } from 'preact';
import style from './pagebuttons.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class PageButtons extends Component {
	render() {
		return (
			<span>
				<button class={style.button} onClick={this.props.onPreviousClick}><FontAwesomeIcon icon={faChevronLeft}/></button>
				<button class={style.button} onClick={this.props.onNextClick}><FontAwesomeIcon icon={faChevronRight}/></button>
			</span>
		);
	}
}
