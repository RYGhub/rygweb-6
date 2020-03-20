import { Component } from 'preact';
import Box from './box';

export default class UserInfoBox extends Component {
	render() {
		return (
			<Box left={"Informazioni tecniche"}>
				<ul>
					<li>ID: <b>{this.props.user.uid}</b></li>
					<li>Tipo utente: <b>{this.props.user.role}</b></li>
				</ul>
			</Box>
		);
	}
}
