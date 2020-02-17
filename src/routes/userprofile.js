import { Component } from 'preact';
import style from './userprofile.less';
import Loading from '../components/loading';
import Box from '../components/box';
import MainTitle from '../components/maintitle';
import HInput from '../components/hinput';
import HButtonOnce from '../components/hbuttononce';
import HButton from '../components/hbutton';
import Success from '../components/success';

export default class UserProfile extends Component {
	constructor() {
		super();
		this.state = {
			"data": null,
			"password_change_new_password": null,
			"password_change_status": "waiting",
			"password_change_revoked_tokens": null
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/user/get/v1?id=" + this.props.user_id).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	onNewPasswordChange = e => {
		this.setState({
			"password_change_new_password": e.target.value
		})
	};

	onPasswordChangeClick = e => {
		this.setState({
			"password_change_status": "running"
		});
		fetch("https://rygapi.steffo.eu/api/token/passwd/v1", {
			method: "POST",
			body: JSON.stringify({
				"token": this.props.loggedIn.token,
				"new_password": this.state.password_change_new_password
			})
		}).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				"password_change_status": "done",
				"password_change_revoked_tokens": json.data.revoked_tokens
			});
		});
	};

	render() {
		if(this.state.data === null) {
			return <Loading/>;
		}

		let passwordChangeBox = "";
		if(this.props.loggedIn && this.props.loggedIn.user.uid === this.props.user_id) {
			let passwordChangeContents;
			if(this.state.password_change_status === "waiting") {
				passwordChangeContents = (
					<div>
						<HInput label={"Nuova password"} type={"password"} value={this.state.password_change_new_password} onChange={this.onNewPasswordChange}/>
						<HButton label={"Cambia password"} onClick={this.onPasswordChangeClick}/>
					</div>
				)
			}
			else if(this.state.password_change_status === "running") {
				passwordChangeContents = <Loading text={"Cambio password in corso..."}/>
			}
			else if(this.state.password_change_status === "done") {
				passwordChangeContents = <Success>Password cambiata con successo! E' stato automaticamente effettuato il logoff da {this.state.password_change_revoked_tokens} accessi.</Success>
			}
			passwordChangeBox = <Box left={"Cambia password"}>{passwordChangeContents}</Box>;
		}

		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/GenericUser.png"} imgalt={"👤"} text={this.state.data.username}/>
				{passwordChangeBox}
			</div>
		)

	}
}
