import { Component } from 'preact';
import style from './invisiTable.less';

export default class InvisiTable extends Component {
	render() {
		return (
			<table class={style.invisitable + " " + this.props.class}>
				{this.props.children}
			</table>
		);
	}
}
