import { Component } from 'preact';
import Box from './box';
import HInput from './hinput';
import HButtonOnce from './hbuttononce';
import { route } from 'preact-router';

export default class LoginBox extends Component {

	constructor() {
		super();
		this.state = {
			"username": "",
			"password": "",
			"status": "waiting",
		}
	}

	onUsernameChange = e => {
		this.setState({
			"username": e.target.value
		})
	};

	onPasswordChange = e => {
		this.setState({
			"password": e.target.value
		})
	};

	onLoginClick = e => {
		this.setState({
			"status": "running"
		});
		console.log(`Trying to login...`);
		fetch("https://rygapi.steffo.eu/api/login/royalnet/v1", {
			method: "POST",
			headers: {
				//Fix this in Royalnet first
				//'Accept': 'application/json',
				//'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": this.state.username,
				"password": this.state.password
			})
		}).then(r => r.json()).then((j) => {
			if(j.success) {
				this.setState({
					"status": "done"
				});
				this.props.onSuccessfulLogin(j.data);
			}
			else {
				this.setState({
					"status": "error"
				});
				console.error(j);
			}

		});
	};

	render() {
		let inputDisabled = !(this.state.status === "waiting" || this.state.status === "error");

		return (
			<Box left={"Login"}>
				<HInput label={"Username"} type={"text"} value={this.state.username} onChange={this.onUsernameChange} disabled={inputDisabled} name={"username"}/>
				<HInput label={"Password"} type={"password"} value={this.state.password} onChange={this.onPasswordChange} disabled={inputDisabled}/>
				<HButtonOnce label={"Login"} onClick={this.onLoginClick} status={this.state.status}/>
			</Box>
		);
	}
}
