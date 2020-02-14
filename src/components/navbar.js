import { Component } from 'preact';
import style from './navbar.less';

export default class Navbar extends Component {
	render() {
		return (
			<nav class={style.navbar}>
				<div class={style.left}>
					{this.props.left}
				</div>
				<div class={style.center}>
					{this.props.center}
				</div>
				<div class={style.right}>
					{this.props.right}
				</div>
			</nav>
		);
	}
}
