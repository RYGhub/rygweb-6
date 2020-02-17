import { Component } from 'preact';
import style from './nomedorato.less';

export default class NomeDorato extends Component {
	render() {
		return (
			<abbr class={style.nomedorato} title={"Il Nome Dorato ti permette di cambiare nickname alle persone che non ce l'hanno!"}>
				{this.props.children}
			</abbr>
		);
	}
}
