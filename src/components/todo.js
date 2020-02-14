import {Component} from "preact"
import style from "./todo.less"

export default class Todo extends Component {
    render() {
        return <span class={style.todo}>{this.props.children}</span>
    }
}
