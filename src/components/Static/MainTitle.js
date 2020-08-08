import style from "./MainTitle.less"
import { HZero } from 'bluelib';
import RandomQuote from '../Dynamic/RandomQuote';

export default function(props) {
    return (
        <div class={style.hzero}>
            <HZero>
                <img class={style.image} src={props.src} alt={props.alt} />
                <span class={style.text}>
                    &nbsp;{props.children}
                </span>
            </HZero>
            <div class={style.quote}>
                <RandomQuote/>
            </div>
        </div>
    )
}
