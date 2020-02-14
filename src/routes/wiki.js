import { Component } from 'preact';
import style from './wiki.less';
import Todo from '../components/todo';

export default class Wiki extends Component {
	render() {
		return (
			<Todo>TODO: questa sezione non è ancora stata creata!</Todo>
		);
	}
}
