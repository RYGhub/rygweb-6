import { Component } from 'preact';
import style from './box.less';
import extendableClasses from "../utils/extendableClasses";


export default class Box extends Component {
	render() {
		return (
			<div class={extendableClasses(style.box, this.props.class)}>
				<div class={extendableClasses(style.top, this.props.classTop)}>
					{this.props.left !== undefined ? <div class={extendableClasses(style.left, this.props.classLeft)}>{this.props.left}</div> : null}
					{this.props.right !== undefined ? <div class={extendableClasses(style.right, this.props.classRight)}>{this.props.right}</div> : null}
				</div>
				<div class={extendableClasses(style.bottom, this.props.classBottom)}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
