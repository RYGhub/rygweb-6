import {Component} from "preact"
import style from "./maintitle.less"

export default class MainTitle extends Component {
    render() {
        return (
            <div class={style.title}>
                <img class={style.image} src={this.props.imgsrc} alt={this.props.imgalt} />
                <span class={style.text}>
                    &nbsp;{this.props.text}
                </span>
            </div>
        )
    }
}
