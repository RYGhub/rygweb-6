import { Line } from 'react-chartjs-2';
import { Panel, Section, useRoyalnetData } from 'bluelib';
import ErrorAbbr from '../Static/ErrorAbbr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ErrorBox from '../Static/ErrorBox';
import {Box} from 'bluelib';


const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const labels = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];



export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/cvstats/months/v1", {});

	if(error !== undefined) {
		return (
			<ErrorBox error={error}/>
		);
	}

	if(data === undefined) {
		return (
			<Box>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Loading stats...
			</Box>
		);
	}

	const matrix = Array(months.length).fill().map(() => Array(24).fill());

	for(const d of data) {
		matrix[d.m-1][d.h] = d
	}

	const sections = [];

	for(let m = 0; m < months.length; m++) {
		const d = matrix[m];
		console.log(d);
		const datasets = [];

		datasets.push({
			label: "Utenti totali",
			data: d.map((item) => item ? item.all_time.users_total : null),
			backgroundColor: "#747f8d44",
			borderColor: "#747f8d",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: true,
		});
		datasets.push({
			label: "Membri totali",
			data: d.map((item) => item ? item.all_time.members_total : null),
			backgroundColor: "#747f8d44",
			borderColor: "#747f8d",
			pointHitRadius: 10,
			hidden: true,
		});
		datasets.push({
			label: "Utenti online",
			data: d.map((item) => item ? item.all_time.users_online : null),
			backgroundColor: "#43b58144",
			borderColor: "#43b581",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: true,
		});
		datasets.push({
			label: "Membri online",
			data: d.map((item) => item ? item.all_time.members_online : null),
			backgroundColor: "#43b58144",
			borderColor: "#43b581",
			pointHitRadius: 10,
			hidden: false,
		});
		datasets.push({
			label: "Utenti connessi",
			data: d.map((item) => item ? item.all_time.users_connected : null),
			backgroundColor: "#00d8d144",
			borderColor: "#00d8d1",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: true,
		});
		datasets.push({
			label: "Membri connessi",
			data: d.map((item) => item ? item.all_time.members_connected : null),
			backgroundColor: "#00d8d144",
			borderColor: "#00d8d1",
			pointHitRadius: 10,
			hidden: true,
		});
		datasets.push({
			label: "Utenti in gioco",
			data: d.map((item) => item ? item.all_time.users_playing : null),
			backgroundColor: "#d88e0044",
			borderColor: "#d88e00",
			borderDash: [10, 10],
			pointHitRadius: 10,
			hidden: true,
		});
		datasets.push({
			label: "Membri in gioco",
			data: d.map((item) => item ? item.all_time.members_playing : null),
			backgroundColor: "#d88e0044",
			borderColor: "#d88e00",
			pointHitRadius: 10,
			hidden: false,
		});

		sections.push(
			<Panel title={months[m]}>
				<Line data={{labels: labels, datasets: datasets}} height={300} options={{ maintainAspectRatio: false }}/>
			</Panel>
		)
	}

	return (
		<div>
			{sections}
		</div>
	);
}
