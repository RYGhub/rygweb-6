import { Component } from 'preact';
import style from './royalnetuser.less';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

export default class RoyalnetUser extends Component {
	render() {
		let icon = "";
		if(this.props.data.role === "Bot") {
			icon = <FontAwesomeIcon icon={faRobot}/>
		}
		return (
			<a href={"/user/" + this.props.data.uid}>{icon}{this.props.data.username}</a>
		);
	}
}
