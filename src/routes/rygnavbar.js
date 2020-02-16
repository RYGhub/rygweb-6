import { Component } from 'preact';
import style from './rygnavbar.less';
import Navbar from '../components/navbar';
import NavbarLink from '../components/navbarlink';

export default class RygNavbar extends Component {
	render() {
		let left = [
			<NavbarLink href={"/"} pathname={this.props.pathname}>
				<img src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} class={style.ryglogo} alt={"⭐ ️"}/>
				&nbsp;Royal Games
			</NavbarLink>,
			" | ",
			<NavbarLink href={"/diario"} pathname={this.props.pathname}>
				Diario
			</NavbarLink>,
			" | ",
			<NavbarLink href={"/wiki"} pathname={this.props.pathname}>
				Wiki
			</NavbarLink>,
			" | ",
			<NavbarLink pathname={this.props.pathname} disabled={true} title={"TODO"}>
				Membri
			</NavbarLink>
		];

		let user;
		if(this.props.loggedIn === null)
			user = (
				<NavbarLink href={"/login"} pathname={this.props.pathname}>
					Login&nbsp;
					<img src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} class={style.avatar} alt={" 👤"}/>
				</NavbarLink>
			);
		else {
			user = (
				<NavbarLink href={"/profile"} disabled={true} title={"TODO"} pathname={this.props.pathname}>
					{this.props.loggedIn.user.username}&nbsp;
					<img src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} class={style.avatar} alt={" 👤"}/>
				</NavbarLink>
			);
		}

		let right = [
			user
		];

		return (
			<Navbar left={left} right={right}/>
		);
	}
}
