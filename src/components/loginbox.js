import { Component } from 'preact';
import Box from './box';
import HInput from './hinput';
import HButtonOnce from './hbuttononce';

export default class LoginBox extends Component {
	render() {
		let inputDisabled = (this.props.loginStatus !== "waiting");

		return (
			<Box left={"Login"}>
				<HInput label={"Username"} type={"text"} value={this.props.usernameValue} onChange={this.props.onUsernameChange} disabled={inputDisabled}/>
				<HInput label={"Password"} type={"password"} value={this.props.passwordValue} onChange={this.props.onPasswordChange} disabled={inputDisabled}/>
				<HButtonOnce label={"Login"} onClick={this.props.onLoginClick} status={this.props.loginStatus}/>
			</Box>
		);
	}
}
