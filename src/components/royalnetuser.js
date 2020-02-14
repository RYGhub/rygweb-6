import { Component } from 'preact';
import style from './royalnetuser.less';

export default class RoyalnetUser extends Component {
	render() {
		return (
			<a href={"/user/" + this.props.data.uid}>{this.props.data.username}</a>
		);
	}
}
