// Import debugging tools
import WikiNew from './components/Elements/Dynamic/WikiNew';

let Sentry = null;
if(process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...");
	require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...");
	Sentry = require("@sentry/browser");
	let SentryIntegrations = require("@sentry/integrations");
	// noinspection JSUnresolvedVariable
	Sentry.init({
		dsn: "https://3220f9abc0c4451e9cb2443504fe2986@o40131.ingest.sentry.io/5282299",
		release: process.env.RELEASE,
		environment: "production",
		beforeSend(event, hint) {
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
import "easymde/dist/easymde.min.css";
import "./styles/override-easymde.less"

import Router from 'preact-router';
import {createHashHistory} from 'history';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './routes/Home';
import HeaderIcon from './components/Elements/HeaderIcon';
import Link from './components/Elements/Link';
import CurrentPage from './contexts/CurrentPage';
import { useState } from 'preact/hooks';
import { RoyalnetLoginStatus, theme, useLoginDataStorage, RoyalnetInstanceUrl } from 'bluelib';
import ErrorBox from './components/Elements/ErrorBox';
import RoyalnetVersionFooter from './components/Elements/RoyalnetVersionFooter';
import LoginProfile from './components/Elements/LoginProfile';
import Profile from './routes/Profile';
import WikiExisting from './components/Elements/Dynamic/WikiExisting';
import BasicContainer from './components/Layout/BasicContainer';
import LoginBox from './components/Elements/LoginBox';
import InstanceSelectBox from './components/Elements/InstanceSelectBox';
import InstanceSelectFooter from './components/Elements/RoyalnetInstanceFooter';


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
			<Link href={"/"}>
				<HeaderIcon src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐ ️"}/>
				&nbsp;Royal Games
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
					<Home path={"/"} />
					<InstanceSelectBox path={"/instance"} onConfirm={setInstanceUrl}/>
					<LoginBox path={"/login"} onLogin={setLoginStatus}/>
					<Profile path={"/u/:uid"} logout={logout}/>
					<WikiExisting full={true} path={"/w/:pageId"}/>
					<WikiNew path={"/w/new"}/>
					<ErrorBox default error={new Error("Page not found")}/>
				</Router>
				<Footer>
					<Link href={"https://github.com/Steffo99/ryg.steffo.eu"}>ryg.steffo.eu {process.env.RELEASE}</Link>
					&nbsp;-&nbsp;
					<RoyalnetVersionFooter/>
					&nbsp;@&nbsp;
					<InstanceSelectFooter/>
				</Footer>
			</BasicContainer>
		</div>

		</RoyalnetLoginStatus.Provider>
		</RoyalnetInstanceUrl.Provider>
		</CurrentPage.Provider>
	);
}
