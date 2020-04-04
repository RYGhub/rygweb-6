import { Component } from 'preact';
import style from './rygnavbar.less';
import Navbar from '../components/navbar';
import Link from '../components/link';

export default class RygNavbar extends Component {
	render() {
		let left = [
			<Link href={"/"} pathname={this.props.pathname}>
				<img src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} class={style.ryglogo} alt={"⭐ ️"}/>
				&nbsp;Royal Games
			</Link>,
			" | ",
			<Link href={"/diario"} pathname={this.props.pathname}>
				Diario
			</Link>,
			" | ",
			<Link href={"/wiki"} pathname={this.props.pathname}>
				Wiki
			</Link>,
			" | ",
			<Link href={"/members"} pathname={this.props.pathname}>
				Membri
			</Link>,
		];

		let user;
		if(this.props.loggedIn === null)
			user = (
				<Link href={"/login"} pathname={this.props.pathname}>
					Login&nbsp;
					<img src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} class={style.avatar} alt={" 👤"}/>
				</Link>
			);
		else {
			user = (
				<Link href={"/user/me"} pathname={this.props.pathname}>
					{this.props.loggedIn.user.username}&nbsp;
					<img src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} class={style.avatar} alt={" 👤"}/>
				</Link>
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
