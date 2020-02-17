import "preact/debug";
import { Component } from 'preact';
import { route, Route, Router } from 'preact-router';
import style from "./index.less";
import _manifest from "./meta/manifest.json";
import _cname from "./meta/CNAME";
import _nojekyll from "./meta/.nojekyll";
import Homepage from './routes/homepage';
import RygNavbar from './routes/rygnavbar';
import Diario from './routes/diario';
import { createHashHistory } from 'history';
import Quattrocentoquattro from './routes/quattrocentoquattro';
import WikiList from './routes/wikilist';
import WikiPage from './routes/wikipage';
import WikiEdit from './routes/wikiedit';
import Login from './routes/login';
import BrawlhallaDue from './routes/brawlhalladue';
import UserProfile from './routes/userprofile';

export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			"pathname": window.location.hash.substr(1),
			"login_username": "",
			"login_password": "",
			"login_status": "waiting",
			"logged_in": JSON.parse(window.localStorage.getItem("logged_in"))
		}
	}

	onRouteChange = e => {
		this.setState({
			"pathname": window.location.hash.substr(1)
		});
	};

	onUsernameChange = e => {
		this.setState({
			"login_username": e.target.value
		})
	};

	onPasswordChange = e => {
		this.setState({
			"login_password": e.target.value
		})
	};

	onLoginClick = e => {
		this.setState({
			"login_status": "running"
		});
		fetch("https://rygapi.steffo.eu/api/login/royalnet/v1", {
			method: "POST",
			headers: {
				//Fix this in Royalnet first
				//'Accept': 'application/json',
				//'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": this.state.login_username,
				"password": this.state.login_password
			})
		}).then((response) => {
			return response.json()
		}).then((json) => {
			this.setState({
				"logged_in": json.data,
				"login_status": "done"
			});
			window.localStorage.setItem("logged_in", JSON.stringify(json.data));
			route("/");
		});
	};

	render() {
		return (
			<div>
				<RygNavbar pathname={this.state.pathname} loggedIn={this.state.logged_in}/>
				<Router onChange={this.onRouteChange} history={createHashHistory()}>
					<Homepage path={"/"}/>
					<Diario path={"/diario"}/>
					<WikiList path={"/wiki"}/>
					<WikiPage path={"/wiki/:page_id"}/>
					<WikiEdit path={"/wiki/:page_id/edit"} loggedIn={this.state.logged_in}/>
					<WikiEdit path={"/wiki/new"} page_id={null} loggedIn={this.state.logged_in}/>
					<BrawlhallaDue path={"/ilmonarcadelvalhalla2"}/>
					<UserProfile path={"/user/:user_id"} loggedIn={this.state.logged_in}/>
					<UserProfile path={"/user/me"} user_id={this.state.logged_in.user.uid} loggedIn={this.state.logged_in}/>
					<Login
						path={"/login"}
						usernameValue={this.state.login_username}
						onUsernameChange={this.onUsernameChange}
						passwordValue={this.state.login_password}
						onPasswordChange={this.onPasswordChange}
						loginStatus={this.state.login_status}
						onLoginClick={this.onLoginClick}
					/>
					<Quattrocentoquattro default/>
				</Router>
			</div>
		)
	}
}
