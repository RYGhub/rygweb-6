import { Component } from 'preact';
import style from './login.less';
import HInput from '../components/hinput';
import Box from '../components/box';
import HButton from '../components/hbutton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Todo from '../components/todo';

export default class Login extends Component {
	render() {
		let loginButton;
		if(this.props.loginState === "waiting") {
			loginButton = <HButton label={<span>Login</span>} onClick={this.props.onLoginClick}/>
		}
		else if(this.props.loginState === "running") {
			loginButton = <HButton label={<span><FontAwesomeIcon icon={faSpinner} pulse={true}/> Login</span>} disabled={true}/>
		}
		else if(this.props.loginState === "done") {
			loginButton = <HButton label={<span><FontAwesomeIcon icon={faCheck}/> Login</span>} disabled={true}/>
		}

		return (
			<Box left={"Login"}>
				<HInput label={"Username"} type={"text"} value={this.props.usernameValue} onChange={this.props.onUsernameChange}/>
				<HInput label={"Password"} type={"password"} value={this.props.passwordValue} onChange={this.props.onPasswordChange}/>
				{loginButton}
				<Todo>TODO: finire qui</Todo>
			</Box>
		);
	}
}
