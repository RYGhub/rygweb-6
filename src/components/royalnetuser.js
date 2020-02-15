import { Component } from 'preact';
import style from './royalnetuser.less';
import {Icon, icons} from "./icon";

export default class RoyalnetUser extends Component {
	render() {
		let icon = "";
		return (
			<a href={"/user/" + this.props.data.uid}>{icon}{this.props.data.username}</a>
		);
	}
}
