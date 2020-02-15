import { Component } from 'preact';
import style from './diario.less';
import Todo from '../components/todo';
import DiarioEntry from '../components/diarioentry';
import Loading from '../components/loading';
import PageButtons from '../components/pagebuttons';
import Box from '../components/box';

export default class Diario extends Component {
	constructor() {
		super();
		this.state = {
			"page": 1,
			"data": null
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/diario/list/v1?page=-" + this.state.page).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({
				"data": json.data
			});
		})
	};

	previousPage = () => {
		this.setState((state) => {
			if (state.page <= 1) {
				return {}
			}
			return {
				"page": state.page - 1,
				"data": null
			}
		});
		this.getData();
	};

	nextPage = () => {
		this.setState((state) => {
			return {
				"page": state.page + 1,
				"data": null
			}
		});
		this.getData();
	};

	render() {
		let entries;
		if (this.state.data === undefined || this.state.data === null) {
			entries = <Loading/>
		}
		else if(this.state.data.length === 0) {
			entries = <span>Nessuna riga trovata.</span>
		}
		else {
			entries = this.state.data.map((entry) => {
				return <DiarioEntry data={entry} key={entry.diario_id}/>
			})
		}

		let pageButtons = (
			<span>
				<span>Pagina {this.state.page}</span>&nbsp;<PageButtons onPreviousClick={this.previousPage} onNextClick={this.nextPage}/>
			</span>
		);

		return (
			<div>
				<Box left={"Diario Royal Games"} right={pageButtons}>
					{entries}
				</Box>
			</div>
		);
	}
}
