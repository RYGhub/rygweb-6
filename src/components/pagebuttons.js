import { Component } from 'preact';
import style from './pagebuttons.less';
import {Icon, icons} from "./icon";

export default class PageButtons extends Component {
	render() {
		return (
			<span>
				<button onClick={this.props.onPreviousClick}><Icon icon={icons['fa-chevron-left']}/></button>
				<button onClick={this.props.onNextClick}><Icon icon={icons['fa-chevron-right']}/></button>
			</span>
		);
	}
}
