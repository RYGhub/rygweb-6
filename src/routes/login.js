import { Component } from 'preact';
import style from './login.less';
import HInput from '../components/hinput';
import Box from '../components/box';
import HButton from '../components/hbutton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Todo from '../components/todo';
import HButtonOnce from '../components/hbuttononce';

export default class Login extends Component {
	render() {

		return (
			<Box left={"Login"}>
				<HInput label={"Username"} type={"text"} value={this.props.usernameValue} onChange={this.props.onUsernameChange}/>
				<HInput label={"Password"} type={"password"} value={this.props.passwordValue} onChange={this.props.onPasswordChange}/>
				<HButtonOnce label={"Login"} onClick={this.props.onLoginClick} status={this.props.loginStatus}/>
			</Box>
		);
	}
}
