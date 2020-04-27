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
import WikiPageBox from './components/wikipagebox';
import WikiEditBox from './components/wikiEditBox';
import BrawlhallaDue from './routes/brawlhalladue';
import UserProfile from './routes/userprofile';
import Error from './components/error';
import WikiList from './routes/wikilist';
import Login from './routes/login';
import Diario from './routes/diario';
import Members from './routes/members';
import ErrorCatcher from './components/errorCatcher';
import Stats from './routes/stats';


// noinspection JSUnusedGlobalSymbols
export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			"pathname": window.location.hash.substr(1),
			"logged_in": null
		}
	}

	componentDidMount() {
		let login_store = JSON.parse(window.localStorage.getItem("logged_in"));
		if(login_store !== null) {
			console.log(`Found existing login token: ${login_store.token}`);
			fetch(`https://rygapi.steffo.eu/api/token/info/v1?token=${login_store.token}`).then((response) => response.json()).then((j => {
				let expiration = new Date(j.data.expiration);
				console.log(`Login token expires: ${expiration}`);
				let now = new Date();
				if(expiration >= now ) {
					console.log(`Login token is valid, logging in...`);
					this.setState({
						"logged_in": j.data
					});
					console.log(`Successfully logged in as ${j.data.user.username}!`);
				}
				else {
					console.log(`Login token has expired, clearing...`);
					window.localStorage.setItem("logged_in", null);
				}
			}))
		}
		else {
			console.log(`No login token found.`)
		}
	};

	onRouteChange = e => {
		this.setState({
			"pathname": window.location.hash.substr(1)
		});
	};

	onSuccessfulLogin = data => {
		window.localStorage.setItem("logged_in", JSON.stringify(data));
		this.setState({
			"logged_in": data
		});
		console.log(`Successfully logged in as ${data.user.username}!`);
		route("/");
	};

	onLogoutClick = e => {
		window.localStorage.setItem("logged_in", null);
		this.setState({
			"logged_in": null
		});
		console.log(`Successfully logged out!`);
		route("/");
	};

	render() {
		return (
			<div>
				<RygNavbar pathname={this.state.pathname} loggedIn={this.state.logged_in}/>
				<ErrorCatcher>
					<Router onChange={this.onRouteChange} history={createHashHistory()}>
						<Homepage path={"/"}/>
						<Diario path={"/diario"}/>
						<WikiList path={"/wiki"}/>
						<WikiPageBox path={"/wiki/:pageId"}/>
						<WikiEditBox path={"/wiki/:pageId/edit"} loggedIn={this.state.logged_in}/>
						<WikiEditBox path={"/wiki/new"} pageId={null} loggedIn={this.state.logged_in}/>
						<BrawlhallaDue path={"/ilmonarcadelvalhalla2"}/>
						<UserProfile path={"/user/:userId"} loggedIn={this.state.logged_in}/>
						<UserProfile path={"/user/me"} userId={this.state.logged_in ? this.state.logged_in.user.uid : null} loggedIn={this.state.logged_in} onLogoutClick={this.onLogoutClick}/>
						<Members path={"/members"}/>
						<Stats path={"/stats"}/>
						<Login path={"/login"} onSuccessfulLogin={this.onSuccessfulLogin}/>
						<Error default>Pagina non trovata.</Error>
					</Router>
				</ErrorCatcher>
			</div>
		)
	}
}
