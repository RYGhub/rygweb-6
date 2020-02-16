import { Component } from 'preact';
import style from './error.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default class Error extends Component {
	render() {
		return (
			<div class={style.errorcolor}>
				<FontAwesomeIcon icon={faExclamationCircle}/> {this.props.children}
			</div>
		);
	}
}
