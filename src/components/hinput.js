import { Component } from 'preact';
import style from './hinput.less';

export default class HInput extends Component {
	render() {
		//TODO: eww il label è un pixel più in alto dell'input
		return (
			<label class={style.label}>
				<div class={style.text}>{this.props.label}</div>
				<input class={style.input} type={this.props.type} value={this.props.value} onChange={this.props.onChange}/>
			</label>
		);
	}
}
