import { Component } from 'preact';

// noinspection ES6UnusedImports
import style from "./index.less";
// noinspection ES6UnusedImports
import _manifest from "./meta/manifest.json";
// noinspection ES6UnusedImports
import _cname from "./meta/CNAME";
// noinspection ES6UnusedImports
import _nojekyll from "./meta/.nojekyll";

import { Router, route } from 'preact-router';
import { createHashHistory } from 'history';
import Homepage from './routes/homepage';
import RygNavbar from './routes/rygnavbar';
import Diario from './routes/diario';
import WikiPageBox from './components/wikipagebox';
import WikiEditBox from './components/wikiEditBox';
import LoginBox from './components/loginbox';
import BrawlhallaDue from './routes/brawlhalladue';
import UserProfile from './routes/userprofile';
import Error from './components/error';
import WikiList from './routes/wikilist';


// noinspection JSUnusedGlobalSymbols
export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			"pathname": window.location.hash.substr(1),
			"error": null,
			"errorInfo": null,
			"login_username": "",
			"login_password": "",
			"login_status": "waiting",
			"logged_in": JSON.parse(window.localStorage.getItem("logged_in"))
		}
	}

	/*
	componentDidCatch(error, errorInfo) {
		this.setState({
			"error": error,
			"errorInfo": errorInfo
		});
	};
	 */

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
					<WikiPageBox path={"/wiki/:pageId"}/>
					<WikiEditBox path={"/wiki/:pageId/edit"} loggedIn={this.state.logged_in}/>
					<WikiEditBox path={"/wiki/new"} pageId={null} loggedIn={this.state.logged_in}/>
					<BrawlhallaDue path={"/ilmonarcadelvalhalla2"}/>
					<UserProfile path={"/user/:userId"} loggedIn={this.state.logged_in}/>
					<UserProfile path={"/user/me"} userId={this.state.logged_in ? this.state.logged_in.user.uid : null} loggedIn={this.state.logged_in}/>
					<LoginBox
						path={"/login"}
						usernameValue={this.state.login_username}
						onUsernameChange={this.onUsernameChange}
						passwordValue={this.state.login_password}
						onPasswordChange={this.onPasswordChange}
						loginStatus={this.state.login_status}
						onLoginClick={this.onLoginClick}
					/>
					<Error default>Pagina non trovata.</Error>
				</Router>
			</div>
		)
	}
}
