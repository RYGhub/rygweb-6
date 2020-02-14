import { Component } from 'preact';
import style from './box.less';


export default class Box extends Component {
	render() {
		let inside = null;
		if(this.props.left !== undefined || this.props.center !== undefined || this.props.right !== undefined) {
			inside = [
			<div class={style.top}>
				{this.props.left !== undefined ? <div className={style.left}>{this.props.left}</div> : null}
				{this.props.center !== undefined ? <div class={style.center}>{this.props.center}</div> : null}
				{this.props.right !== undefined ? <div class={style.right}>{this.props.right}</div> : null}
			</div>,
			<div class={style.bottom}>{this.props.children}</div>
		]
		}
		else {
			inside = <div class={style.single}>{this.props.children}</div>
		}

		return (
			<div class={style.box}>
				{inside}
			</div>
		);
	}
}
