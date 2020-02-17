import { Component } from 'preact';
import style from './success.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default class Success extends Component {
	render() {
		return (
			<div class={style.successcolor}>
				<FontAwesomeIcon icon={faCheckCircle}/> {this.props.children}
			</div>
		);
	}
}
