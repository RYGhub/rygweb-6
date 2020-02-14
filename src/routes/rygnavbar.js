import { Component } from 'preact';
import style from './rygnavbar.less';
import Navbar from '../components/navbar';
import Navbarlink from '../components/navbarlink';

export default class RygNavbar extends Component {
	render() {
		let left = (
			<div>
				<Navbarlink href={"/"} pathname={this.props.pathname}>
					<img src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} className={style.ryglogo} alt={"⭐️"}/> Royal Games
				</Navbarlink>
				&nbsp;|&nbsp;
				<Navbarlink href={"/diario"} pathname={this.props.pathname}>
					Diario
				</Navbarlink>
				&nbsp;|&nbsp;
				<Navbarlink href={"/wiki"} pathname={this.props.pathname}>
					Wiki
				</Navbarlink>
			</div>
		);

		return (
			<Navbar left={left}/>
		);
	}
}
