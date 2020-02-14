import { Component } from 'preact';
import style from './diario.less';
import Todo from '../components/todo';
import DiarioEntry from '../components/diarioentry';
import Loading from '../components/loading';

export default class Diario extends Component {
	componentDidMount() {
		this.state = {
			"data": null
		};
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/diario/list/v1?page=-1").then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				"data": json.data
			});
		})
	};


	render() {
		let entries;
		if (this.state.data === undefined || this.state.data === null) {
			entries = <div><Loading/></div>
		}
		else {
			entries = this.state.data.map((entry) => {
				return <DiarioEntry data={entry} key={entry.diario_id}/>
			})
		}

		return (
			<div>
				<h1>
					Le ultime 500 righe del Diario Royal Games
				</h1>
				{entries}
				<p>
					<Todo>TODO: Far vedere tutto il diario, non solo la prima pagina</Todo>
				</p>
			</div>
		);
	}
}
