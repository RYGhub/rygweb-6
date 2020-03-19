import { Component } from 'preact';
import Loading from '../components/loading';
import MainTitle from '../components/maintitle';
import ChangePasswordBox from '../components/changepasswordbox';
import UserInfoBox from '../components/userInfoBox';
import Box from '../components/box';
import HButton from '../components/hbutton';
import HButtonOnce from '../components/hbuttononce';
import LogoutBox from '../components/logoutBox';

export default class UserProfile extends Component {
	constructor() {
		super();
		this.state = {
			"data": null,
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/user/get/v1?id=" + this.props.userId).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let thisIsMyProfile = (this.props.loggedIn && this.props.userId === this.props.loggedIn.user.uid);

		if(this.state.data === null) {
			return <Box left={"Caricamento..."}><Loading/></Box>;
		}

		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/GenericUser.png"} imgalt={"👤"} text={this.state.data.username}/>
				<UserInfoBox user={this.state.data}/>
				{thisIsMyProfile ? <ChangePasswordBox loggedIn={this.props.loggedIn}/> : ""}
				{thisIsMyProfile ? <LogoutBox onLogoutClick={this.props.onLogoutClick}/> : ""}
			</div>
		)

	}
}
