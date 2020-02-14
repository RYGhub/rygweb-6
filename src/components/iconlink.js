import {Component} from "preact"
import style from "./iconlink.less"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class IconLink extends Component {
    render() {
        return (
            <a href={this.props.href}>
                <FontAwesomeIcon icon={this.props.icon} />
                &nbsp;
                {this.props.children}
            </a>
        )
    }
}
