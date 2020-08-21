import style from './Masonry.css';
import Grid from './Grid';
import { concatClass } from 'bluelib';

export default function(props) {
	return (
		<Grid class={concatClass(style.masonry, props.class)}>{props.children}</Grid>
	)
}