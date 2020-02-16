import { Component } from 'preact';
import style from './hbutton.less';

export default class HButton extends Component {
	render() {
		let button;
		if(this.state.disabled) {
			button = <button className={style.button} disabled={true}>{this.props.label}</button>;
		}
		else {
			button = <button className={style.button} onClick={this.props.onClick}>{this.props.label}</button>
		}

		return (
			<label className={style.label}>
				<div className={style.text}/>
				{button}
			</label>
		);
	}
}
