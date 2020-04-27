import { Component } from 'preact';
import Box from '../components/box';
import { Line } from 'react-chartjs-2';
import Loading from '../components/loading';

export default class Stats extends Component {
	constructor() {
		super();
		this.state = {
			"data": null
		}
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/cvstats/latest/v1").then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	generateChartJsData = (d, ds) => {
		d.sort((a, b) => {
			let date_a = new Date(a.timestamp);
			let date_b = new Date(b.timestamp);

			if(date_a < date_b) {
				return -1;
			}
			else if(date_a > date_b) {
				return 1;
			}
			else {
				return 0;
			}
		});

		let labels = d.map((item) => {
			let date = new Date(item.timestamp);
			return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
		});

		let datasets = [];

		datasets.push({
			label: "Utenti totali",
			data: d.map((item) => item.users_total),
			backgroundColor: "#747f8d44",
			borderColor: "#747f8d",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: !ds.users_total,
		});
		datasets.push({
			label: "Membri totali",
			data: d.map((item) => item.members_total),
			backgroundColor: "#747f8d44",
			borderColor: "#747f8d",
			pointHitRadius: 10,
			hidden: !ds.members_total,
		});
		datasets.push({
			label: "Utenti online",
			data: d.map((item) => item.users_online),
			backgroundColor: "#43b58144",
			borderColor: "#43b581",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: !ds.users_online,
		});
		datasets.push({
			label: "Membri online",
			data: d.map((item) => item.members_online),
			backgroundColor: "#43b58144",
			borderColor: "#43b581",
			pointHitRadius: 10,
			hidden: !ds.members_online,
		});
		datasets.push({
			label: "Utenti connessi",
			data: d.map((item) => item.users_connected),
			backgroundColor: "#00d8d144",
			borderColor: "#00d8d1",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: !ds.users_connected,
		});
		datasets.push({
			label: "Membri connessi",
			data: d.map((item) => item.members_connected),
			backgroundColor: "#00d8d144",
			borderColor: "#00d8d1",
			pointHitRadius: 10,
			hidden: !ds.members_connected,
		});
		datasets.push({
			label: "Utenti in gioco",
			data: d.map((item) => item.users_playing),
			backgroundColor: "#d88e0044",
			borderColor: "#d88e00",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: !ds.users_playing,
		});
		datasets.push({
			label: "Membri in gioco",
			data: d.map((item) => item.members_playing),
			backgroundColor: "#d88e0044",
			borderColor: "#d88e00",
			pointHitRadius: 10,
			hidden: !ds.members_playing,
		});

		return {
			labels: labels,
			datasets: datasets
		}
	};

	render() {
		return (
			<div>
				<Box left={"Attività dei membri"}>
					{this.state.data !== null ?
						<Line data={this.generateChartJsData(this.state.data, {
							members_online: true,
							members_connected: true,
							members_playing: true,
						})} height={600} options={{ maintainAspectRatio: false }}/>
						: <Loading/>}
				</Box>
			</div>
		);
	}
}
