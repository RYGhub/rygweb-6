import {Component} from "preact";
import style from "./iconlink.less";
import {Icon, icons} from "./icon";

export default class IconLink extends Component {
    render() {
        return (
            <a href={this.props.href}>
                <Icon icon={this.props.icon}/>
                &nbsp;
                {this.props.children}
            </a>
        )
    }
}
