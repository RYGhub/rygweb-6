// Import debugging tools
let Sentry = null;
if(process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...");
	require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...");
	Sentry = require("@sentry/browser");
	// noinspection JSUnresolvedVariable
	Sentry.init({
		dsn: "https://3220f9abc0c4451e9cb2443504fe2986@o40131.ingest.sentry.io/5282299",
		release: process.env.RELEASE,
		environment: "production",
		beforeSend(event) {
			if (event.exception) {
				Sentry.showReportDialog({ eventId: event.event_id });
			}
			return event;
		}
	});
}

import "bluelib/dist/index.css";
import './meta/manifest.json';
import './meta/CNAME';
import './meta/.nojekyll';
import './meta/favicon.ico';
import "easymde/dist/easymde.min.css";
import "./styles/override-easymde.less"

import Router from 'preact-router';
import Header from './components/Static/Header';
import Footer from './components/Static/Footer';
import Home from './routes/Home';
import HeaderIcon from './components/Static/HeaderIcon';
import Link from './components/Dynamic/Link';
import ErrorBox from './components/Static/ErrorBox';
import RoyalnetVersionFooter from './components/Dynamic/RoyalnetVersionFooter';
import LoginProfile from './components/Dynamic/LoginProfile';
import Profile from './routes/Profile';
import WikiExisting from './components/Dynamic/WikiExisting';
import LoginBox from './components/Dynamic/LoginBox';
import InstanceSelectBox from './components/Dynamic/InstanceSelectBox';
import RoyalnetInstanceFooter from './components/Dynamic/RoyalnetInstanceFooter';
import WikiList from './routes/WikiList';
import WikiNew from './components/Dynamic/WikiNew';
import MembersList from './routes/MembersList';
import { createHashHistory } from 'history';
import { useState } from 'preact/hooks';
import { RoyalnetLoginStatus, theme, useLoginDataStorage, RoyalnetInstanceUrl, BasicContainer, CurrentPage } from 'bluelib';


export default function(props) {
	let [currentPage, setCurrentPage] = useState(window.location.hash.substr(1));
	const onPageChange = (event) => {
		setCurrentPage(event.url);
	};

	const [instanceUrl, loginStatus, storeValues, logout] = useLoginDataStorage("https://api.ryg.steffo.eu");
	function setInstanceUrl(value) {
		storeValues(value, loginStatus);
	}
	function setLoginStatus(value) {
		storeValues(instanceUrl, value);
	}

	let header = {
		left: [
			<Link href={"/"} icon={false}>
				<HeaderIcon src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐ ️"}/>
				&nbsp;Royal Games
			</Link>,
			" | ",
			<Link href={"/u"} icon={false}>
				Membri
			</Link>,
			" | ",
			<Link href={"/w"} icon={false}>
				Wiki
			</Link>,
		],
		right: [
			<LoginProfile/>
		]
	};

	return (
		<CurrentPage.Provider value={currentPage}>
		<RoyalnetInstanceUrl.Provider value={instanceUrl}>
		<RoyalnetLoginStatus.Provider value={loginStatus}>

		<div id="app" class={theme.bluelib}>
			<BasicContainer>
				<Header left={header.left} right={header.right}/>
				<Router history={createHashHistory()} onChange={onPageChange}>
					<Home path={"/"}/>
					<InstanceSelectBox path={"/instance"} onConfirm={setInstanceUrl}/>
					<LoginBox path={"/login"} onLogin={setLoginStatus}/>
					<Profile path={"/u/:uid"} logout={logout}/>
					<MembersList path={"/u"}/>
					<WikiExisting full={true} path={"/w/:pageId"}/>
					<WikiNew path={"/w/new"}/>
					<WikiList path={"/w"}/>
					<ErrorBox default error={new Error("Page not found")}/>
				</Router>
				<Footer>
					<Link href={"https://github.com/Steffo99/ryg.steffo.eu"}>ryg.steffo.eu {process.env.RELEASE}</Link>
					&nbsp;-&nbsp;
					<RoyalnetVersionFooter/>
					&nbsp;@&nbsp;
					<RoyalnetInstanceFooter/>
				</Footer>
			</BasicContainer>
		</div>

		</RoyalnetLoginStatus.Provider>
		</RoyalnetInstanceUrl.Provider>
		</CurrentPage.Provider>
	);
}
