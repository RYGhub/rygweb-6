import { Component } from 'preact';
import { Route, Router } from 'preact-router'
import style from "./index.less"
import manifest from "./meta/manifest.json"
import cname from "./meta/CNAME"
import nojekyll from "./meta/.nojekyll"
import Homepage from './routes/homepage';
import RygNavbar from './routes/rygnavbar';
import Diario from './routes/diario';
import { createHashHistory } from 'history';
import Quattrocentoquattro from './routes/quattrocentoquattro';

export default class Index extends Component {
	constructor() {
		super();
		this.state = {
			"pathname": window.location.hash.substr(1)
		}
	}

	onRouteChange = e => {
		this.setState({
			"pathname": window.location.hash.substr(1)
		});
	};

	render() {
		return (
			<div>
				<RygNavbar pathname={this.state.pathname}/>
				<Router onChange={this.onRouteChange} history={createHashHistory()}>
					<Route component={Homepage} path={"/"}/>
					<Route component={Diario} path={"/diario/"}/>
					<Route component={Quattrocentoquattro} default/>
				</Router>
			</div>
		)
	}
}
