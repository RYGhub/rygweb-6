import { Component } from 'preact';
import style from './error.less';
import Panel from "./panel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default class Error extends Component {
	render() {
		return (
			<Panel class={style.error}>
				<FontAwesomeIcon icon={faExclamationCircle}/> {this.props.children}
			</Panel>
		);
	}
}
