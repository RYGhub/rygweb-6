import { Component } from 'preact';
import style from './loading.less';
import {Icon, icons} from "./icon";

export default class Loading extends Component {
	render() {
		return (
			<span>
				<Icon icon={icons['fa-spinner'] + " " + icons['fa-pulse']}/> Loading...
			</span>
		);
	}
}
