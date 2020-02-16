import { Component } from 'preact';
import { Route, Router } from 'preact-router';
import style from "./index.less";
import "./meta/manifest.json";
import "./meta/CNAME";
import "./meta/.nojekyll";
import Homepage from './routes/homepage';
import RygNavbar from './routes/rygnavbar';
import Diario from './routes/diario';
import { createHashHistory } from 'history';
import Quattrocentoquattro from './routes/quattrocentoquattro';
import WikiList from './routes/wikilist';
import WikiPage from './routes/wikipage';
import WikiEdit from './routes/wikiedit';

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
					<Route component={Diario} path={"/diario"}/>
					<Route component={WikiList} path={"/wiki"}/>
					<Route component={WikiPage} path={"/wiki/:page_id"}/>
					<Route component={WikiEdit} path={"/wiki/:page_id/edit"}/>
					<Route component={Quattrocentoquattro} default/>
				</Router>
			</div>
		)
	}
}
