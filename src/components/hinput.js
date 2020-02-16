import { Component } from 'preact';
import style from './hinput.less';

export default class HInput extends Component {
	render() {
		//TODO: check this!
		return (
			<label>
				<span class={style.label}>{this.props.label}</span>
				<input class={style.input} type={this.props.type} value={this.props.value}/>
			</label>
		);
	}
}
