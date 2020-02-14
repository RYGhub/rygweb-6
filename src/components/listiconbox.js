import {Component} from "preact"
import style from "./listiconbox.less"
import Box from "./box"

export default class ListIconBox extends Component {
    render() {
        return (
            <Box left={this.props.left} center={this.props.center} right={this.props.right}>
                <ul class={style.list}>
                    {this.props.children}
                </ul>
            </Box>
        )
    }
}
