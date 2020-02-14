import {Component} from "preact"
import Router from "preact-router"
import "./index.less"
import "./manifest.json"
import Homepage from './routes/homepage';
import RygNavbar from './routes/rygnavbar';
import Diario from './routes/diario';
import Wiki from './routes/wiki';
import { createHashHistory } from 'history';

export default class Index extends Component {
	componentDidMount() {
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
					<Homepage path={"/"}/>
					<Diario path={"/diario"}/>
					<Wiki path={"/wiki"}/>
				</Router>
			</div>
		)
	}
}
