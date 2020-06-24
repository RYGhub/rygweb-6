import {Component} from "preact"
import style from "./MainTitle.less"

export default function(props) {
    return (
        <div class={style.title}>
            <img class={style.image} src={props.src} alt={props.alt} />
            <span class={style.text}>
                &nbsp;{props.children}
            </span>
        </div>
    )
}
