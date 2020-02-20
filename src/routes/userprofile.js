import { Component } from 'preact';
import Loading from '../components/loading';
import MainTitle from '../components/maintitle';
import ChangePasswordBox from '../components/actionboxes/changepasswordbox';

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
		fetch("https://rygapi.steffo.eu/api/user/get/v1?id=" + this.props.user_id).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let thisIsMyProfile = (this.props.loggedIn && this.props.user_id === this.props.loggedIn.user.uid);

		if(this.state.data === null) {
			return <Loading/>;
		}

		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/GenericUser.png"} imgalt={"👤"} text={this.state.data.username}/>
				{thisIsMyProfile ? <ChangePasswordBox loggedIn={this.props.loggedIn}/> : ""}
			</div>
		)

	}
}
