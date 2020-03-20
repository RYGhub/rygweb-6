import { Component } from 'preact';
import style from './changeNumber.less';

export default class ChangeNumber extends Component {
	render() {
		let colorClass;
		let additionalText = "";
		if(this.props.children > 0) {
			colorClass = style.positive;
			additionalText = "+";
		}
		else if(this.props.children === 0) {
			colorClass = style.neutral;
		}
		else {
			colorClass = style.negative;
		}

		return (
			<span class={style.changenumber + " " + colorClass + " " + this.props.class}>
				{additionalText}{this.props.children}
			</span>
		);
	}
}
