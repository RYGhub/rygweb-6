import { Component } from 'preact';
import style from './success.less';
import Panel from "./panel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default class Error extends Component {
	render() {
		return (
			<Panel class={style.success}>
				<FontAwesomeIcon icon={faCheckCircle}/> {this.props.children}
			</Panel>
		);
	}
}
