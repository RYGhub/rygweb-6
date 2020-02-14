import {Component} from "preact"
import style from "./split.less"

export default class Split extends Component {
    render() {
        let children;
        if (Array.isArray(this.props.children)) {
            children = this.props.children.map((element, index) => {
                return (<div key={index} class={style.splitchild}>{element}</div>)
            })
        } else {
            children = <div key={0} class={style.splitchild}>{this.props.children}</div>
        }
        return (
            <div>
                <div class={style.splitparent}>{children}</div>
            </div>
        )
    }
}
