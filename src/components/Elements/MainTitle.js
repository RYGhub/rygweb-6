import {Component} from "preact"
import style from "./MainTitle.less"
import theme from "../../styles/theme.less";

export default function(props) {
    return (
        <h0>
            <img class={style.image} src={props.src} alt={props.alt} />
            <span class={style.text}>
                &nbsp;{props.children}
            </span>
        </h0>
    )
}
