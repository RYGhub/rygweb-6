import { Panel, useRoyalnetData } from 'bluelib';
import ErrorBox from '../components/Static/ErrorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import SteamMini from '../components/Static/Minis/SteamMini';
import DotaMini from '../components/Static/Minis/DotaMini';
import BrawlhallaMini from '../components/Static/Minis/BrawlhallaMini';
import MiniHolder from '../components/Static/MiniHolder';
import { Fragment } from 'preact';
import LeagueMini from '../components/Static/Minis/LeagueMini';
import OsuMini from '../components/Static/Minis/OsuMini';

export default function (props) {
	const [data, error] = useRoyalnetData("GET", "/api/user/ryg/list/v1");

	if(error !== undefined) {
		return (
			<ErrorBox error={error}/>
		);
	}

	if(data === undefined) {
		return (
			<Panel>
				<FontAwesomeIcon icon={faSpinner} pulse={true}/> Caricamento...
			</Panel>
		)
	}

	let steamMinis = [];
	let dotaMinis = [];
	let brawlhallaMinis = [];
	let leagueMinis = [];
	let osuMinis = [];

	for(let user of data) {
		for(let steam of user.steam) {
			steamMinis.push(<SteamMini user={user} steam={steam}/>);

			if(steam.dota) {
				dotaMinis.push(<DotaMini user={user} steam={steam}/>);
			}

			if(steam.brawlhalla) {
				brawlhallaMinis.push(<BrawlhallaMini user={user} steam={steam}/>);
			}
		}

		for(let league of user.leagueoflegends) {
			leagueMinis.push(<LeagueMini user={user} league={league}/>);
		}

		for(let osu of user.osu) {
			osuMinis.push(<OsuMini user={user} osu={osu}/>);
		}
	}

	steamMinis.sort((a, b) => {
		if(a.props.steam.account_level > b.props.steam.account_level) {
			return -1;
		}
		else if(a.props.steam.account_level === b.props.steam.account_level) {
			return 0;
		}
		else {
			return 1;
		}
	});

	dotaMinis.sort((a, b) => {
		if(a.props.steam.dota.rank === null && b.props.steam.dota.rank === null) {
			return 0;
		}
		else if(b.props.steam.dota.rank === null) {
			return -1;
		}
		else if(a.props.steam.dota.rank === null) {
			return 1;
		}
		else if(a.props.steam.dota.rank.raw > b.props.steam.dota.rank.raw) {
			return -1;
		}
		else if(a.props.steam.dota.rank.raw === b.props.steam.dota.rank.raw) {
			return 0;
		}
		else {
			return 1;
		}
	});

	brawlhallaMinis.sort((a, b) => {
		if(a.props.steam.brawlhalla["1v1"] === null && b.props.steam.brawlhalla["1v1"] === null) {
			return 0;
		}
		else if(b.props.steam.brawlhalla["1v1"] === null) {
			return -1;
		}
		else if(a.props.steam.brawlhalla["1v1"] === null) {
			return 1;
		}
		if(a.props.steam.brawlhalla["1v1"].rating > b.props.steam.brawlhalla["1v1"].rating) {
			return -1;
		}
		else if(a.props.steam.brawlhalla["1v1"].rating === b.props.steam.brawlhalla["1v1"].rating) {
			return 0;
		}
		else {
			return 1;
		}
	});

	leagueMinis.sort((a, b) => {
		if(a.props.league.summoner_level > b.props.league.summoner_level) {
			return -1;
		}
		else if(a.props.league.summoner_level === b.props.league.summoner_level) {
			return 0;
		}
		else {
			return 1;
		}
	});

	osuMinis.sort((a, b) => {
		if(a.props.osu.standard.pp > b.props.osu.standard.pp) {
			return -1;
		}
		else if(a.props.osu.standard.pp === b.props.osu.standard.pp) {
			return 0;
		}
		else {
			return 1;
		}
	});

	return (
		<Fragment>
			<Panel title={"Steam"}>
				<MiniHolder>
					{steamMinis}
				</MiniHolder>
			</Panel>
			<Panel title={"Dota 2"}>
				<MiniHolder>
					{dotaMinis}
				</MiniHolder>
			</Panel>
			<Panel title={"Brawlhalla"}>
				<MiniHolder>
					{brawlhallaMinis}
				</MiniHolder>
			</Panel>
			<Panel title={"League of Legends"}>
				<MiniHolder>
					{leagueMinis}
				</MiniHolder>
			</Panel>
			<Panel title={"osu!"}>
				<MiniHolder>
					{osuMinis}
				</MiniHolder>
			</Panel>
		</Fragment>
	);
}
