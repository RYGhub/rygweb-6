import { Component } from 'preact';
import Box from './box';
import HButton from './hbutton';

export default class LogoutBox extends Component {
	render() {
		return (
			<Box left={"Logout"}>
				<HButton label={"Logout"} onClick={this.props.onLogoutClick}/>
			</Box>
		);
	}
}
