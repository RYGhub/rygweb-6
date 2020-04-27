import {Component} from 'preact'
import style from './panel.less'
import extendableClasses from "../utils/extendableClasses";

export default class Panel extends Component {
    render() {
        return (
            <div class={extendableClasses(style.panel, this.props.class)}>
                {this.props.children}
            </div>
        )
    }
}
