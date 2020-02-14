import { Component } from 'preact';
import style from './navbarlink.less';

export default class Navbarlink extends Component {
	render() {
		if (this.props.pathname === this.props.href) {
			return (
				<span class={style.active}>
					{this.props.children}
				</span>
			)
		}
		else {
			return (
				<a href={this.props.href} class={style.inactive}>
					{this.props.children}
				</a>
			)
		}
	}
}
