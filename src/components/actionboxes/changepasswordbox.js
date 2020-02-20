import { Component } from 'preact';
import HInput from '../forms/hinput';
import HButtonOnce from '../forms/hbuttononce';
import Success from '../success';
import Box from '../box';

export default class ChangePasswordBox extends Component {
	constructor() {
		super();
		this.state = {
			"new_password": null,
			"status": "waiting",
			"revoked_tokens": null
		};
	}

	onPasswordInputChange = e => {
		this.setState({
			"new_password": e.target.value
		})
	};

	onButtonClick = e => {
		this.setState({
			"status": "running"
		});

		fetch("https://rygapi.steffo.eu/api/token/passwd/v1", {
			method: "POST",
			body: JSON.stringify({
				"token": this.props.loggedIn.token,
				"new_password": this.state.new_password
			})
		}).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				"status": "done",
				"revoked_tokens": json.data.revoked_tokens
			});
		});
	};

	render() {
		let inputDisabled = (this.state.status !== "waiting");

		return (
			<Box left={"Cambia password"}>

				<HInput
					label={"Nuova password"}
					type={"password"}
					value={this.state.new_password}
					onChange={this.onPasswordInputChange}
					disabled={inputDisabled}/>

				<HButtonOnce
					label={"Cambia password"}
					onClick={this.onButtonClick}
					status={this.state.status}/>

				{
					this.state.status === "done"
					? <Success>Password cambiata con successo! E' stato automaticamente effettuato il logoff da {this.state.revoked_tokens} accessi.</Success>
					: ""
				}

			</Box>
		);
	}
}
