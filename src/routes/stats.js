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
		fetch("https://rygapi.steffo.eu/api/cvstats/avg/v1").then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	generateChartJsData = (d, key) => {
		let labels = [
			"00:00",
			"01:00",
			"02:00",
			"03:00",
			"04:00",
			"05:00",
			"06:00",
			"07:00",
			"08:00",
			"09:00",
			"10:00",
			"11:00",
			"12:00",
			"13:00",
			"14:00",
			"15:00",
			"16:00",
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
			"23:00",
		];

		let datasets = [
			{
				label: "Membri online (ieri)",
				data: d.map((item) => item["last_day"]["members_online"]),
				backgroundColor: "#43b58144",
				borderColor: "#43b581",
				pointHitRadius: 10,
				hidden: true,
			},
			{
				label: "Membri online (ultima settimana)",
				data: d.map((item) => item["last_week"]["members_online"]),
				backgroundColor: "#43b58144",
				borderColor: "#43b581",
				pointHitRadius: 10,
				borderDash: [20, 20],
				hidden: true,
			},
			{
				label: "Membri online (ultimo mese)",
				data: d.map((item) => item["last_month"]["members_online"]),
				backgroundColor: "#43b58144",
				borderColor: "#43b581",
				pointHitRadius: 10,
				borderDash: [10, 10],
				hidden: true,
			},
			{
				label: "Membri online (media generale)",
				data: d.map((item) => item["all_time"]["members_online"]),
				backgroundColor: "#43b58144",
				borderColor: "#43b581",
				pointHitRadius: 10,
				borderDash: [3, 3],
				hidden: true,
			},

			{
				label: "Membri connessi (ieri)",
				data: d.map((item) => item["last_day"]["members_connected"]),
				backgroundColor: "#00d8d144",
				borderColor: "#00d8d1",
				pointHitRadius: 10,
				hidden: true,
			},
			{
				label: "Membri connessi (ultima settimana)",
				data: d.map((item) => item["last_week"]["members_connected"]),
				backgroundColor: "#00d8d144",
				borderColor: "#00d8d1",
				pointHitRadius: 10,
				borderDash: [20, 20],
				hidden: true,
			},
			{
				label: "Membri connessi (ultimo mese)",
				data: d.map((item) => item["last_month"]["members_connected"]),
				backgroundColor: "#00d8d144",
				borderColor: "#00d8d1",
				pointHitRadius: 10,
				borderDash: [10, 10],
				hidden: true,
			},
			{
				label: "Membri connessi (media generale)",
				data: d.map((item) => item["all_time"]["members_connected"]),
				backgroundColor: "#00d8d144",
				borderColor: "#00d8d1",
				pointHitRadius: 10,
				borderDash: [3, 3],
				hidden: true,
			},

			{
				label: "Membri in gioco (ieri)",
				data: d.map((item) => item["last_day"]["members_playing"]),
				backgroundColor: "#d88e0044",
				borderColor: "#d88e00",
				pointHitRadius: 10,
				hidden: true,
			},
			{
				label: "Membri in gioco (ultima settimana)",
				data: d.map((item) => item["last_week"]["members_playing"]),
				backgroundColor: "#d88e0044",
				borderColor: "#d88e00",
				pointHitRadius: 10,
				borderDash: [20, 20],
				hidden: true,
			},
			{
				label: "Membri in gioco (ultimo mese)",
				data: d.map((item) => item["last_month"]["members_playing"]),
				backgroundColor: "#d88e0044",
				borderColor: "#d88e00",
				pointHitRadius: 10,
				borderDash: [10, 10],
				hidden: true,
			},
			{
				label: "Membri in gioco (media generale)",
				data: d.map((item) => item["all_time"]["members_playing"]),
				backgroundColor: "#d88e0044",
				borderColor: "#d88e00",
				pointHitRadius: 10,
				borderDash: [3, 3],
				hidden: true,
			},
		];

		return {
			labels: labels,
			datasets: datasets
		}
	};

	render() {
		return (
			<div>
				<Box left={"Membri in cv"}>
					{this.state.data !== null ?
						<Line data={this.generateChartJsData(this.state.data)} height={600} options={{ maintainAspectRatio: false }}/>
						: <Loading/>}
				</Box>
			</div>
		);
	}
}
