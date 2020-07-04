import style from "./MainTitle.less"
import { HZero } from 'bluelib';

export default function(props) {
    return (
        <HZero>
            <img class={style.image} src={props.src} alt={props.alt} />
            <span class={style.text}>
                &nbsp;{props.children}
            </span>
        </HZero>
    )
}
