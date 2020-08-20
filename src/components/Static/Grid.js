import style from "./Grid.css";
import { concatClass } from 'bluelib';

export default function(props) {
	return (
		<div class={concatClass(style.grid, props.class)}>{props.children}</div>
	)
}