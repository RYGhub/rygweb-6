import style from "./MainTitle.less"
import RandomQuote from '../Dynamic/RandomQuote';

export default function(props) {
    return (
        <div class={style.maintitle}>
            <img class={style.image} src={props.src} alt={props.alt}/>
            <div class={style.text}>
                {props.children}
            </div>
            <div class={style.quote}>
                <RandomQuote/>
            </div>
        </div>
    )
}
