import { Component } from 'preact';
import style from './link.less';

export default class Link extends Component {
	render() {
		if (this.props.pathname === this.props.href) {
			return (
				<span class={style.active} title={this.props.title}>
					{this.props.children}
				</span>
			)
		}
		else if(this.props.disabled) {
			return (
				<span class={style.disabled} title={this.props.title}>
					{this.props.children}
				</span>
			)
		}
		else {
			return (
				<a href={this.props.href} class={style.inactive} title={this.props.title}>
					{this.props.children}
				</a>
			)
		}
	}
}
