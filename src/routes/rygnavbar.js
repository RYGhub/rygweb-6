import { Component } from 'preact';
import style from './rygnavbar.less';
import Navbar from '../components/navbar';
import Navbarlink from '../components/navbarlink';

export default class RygNavbar extends Component {
	render() {
		let left = [
			<Navbarlink href={"/"} pathname={this.props.pathname}>
				<img src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} className={style.ryglogo} alt={"⭐ ️"}/> Royal Games
			</Navbarlink>,
			" | ",
			<Navbarlink href={"/diario"} pathname={this.props.pathname}>
				Diario
			</Navbarlink>,
			" | ",
			<Navbarlink pathname={this.props.pathname} disabled={true} title={"TODO"}>
				Wiki
			</Navbarlink>,
			" | ",
			<Navbarlink pathname={this.props.pathname} disabled={true} title={"TODO"}>
				Membri
			</Navbarlink>
		];

		return (
			<Navbar left={left} />
		);
	}
}
