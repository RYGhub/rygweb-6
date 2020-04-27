import style from "./split.less";
import { Component } from 'preact';

export default class Split extends Component {
	render() {
        let children;
        if(Array.isArray(this.props.children)) {
            children = this.props.children.map(element => {
                return (<div class={style.splitchild}>{element}</div>);
            });
        }
        else {
            children = <div class={style.splitchild}>{this.props.children}</div>;
        }

		return (
	        <div class={style.split}>
                <div class={style.splitparent}>{children}</div>
            </div>
        );
	}
}
