// Import debugging tools
let Sentry = null;
if(process.env.NODE_ENV === "development") {
	console.debug("Initializing Preact Debugger...")
	require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
	console.debug("Initializing Sentry...")
	Sentry = require("@sentry/browser");
	let SentryIntegrations = require("@sentry/integrations")
	// noinspection JSUnresolvedVariable
	Sentry.init({
		dsn: "https://9f5089346fd14e04a6f412638474dfec@o40131.ingest.sentry.io/5255500",
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

// noinspection ES6UnusedImports
import "bluelib/dist/index.css";
import { theme } from 'bluelib';
// noinspection ES6UnusedImports
import _manifest from './meta/manifest.json';
// noinspection ES6UnusedImports
import _cname from './meta/CNAME';
// noinspection ES6UnusedImports
import _nojekyll from './meta/.nojekyll';

import Router from 'preact-router';
import {createHashHistory} from 'history';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import HeaderIcon from './components/HeaderIcon';

import Link from './components/Link';
import CurrentPage from './contexts/CurrentPage';
import { useState } from 'preact/hooks';
import Error from './components/Error';
import { RoyalnetInstanceUrl } from 'bluelib';


export default function(props) {
	let [currentPage, setCurrentPage] = useState(window.location.hash.substr(1));

	const onPageChange = (event) => {
		setCurrentPage(event.url);
	};


	let header = {
		left: [
			<Link href={"/"}>
				<HeaderIcon src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐ ️"}/>
				&nbsp;Royal Games
			</Link>
		],
		right: [
			<Link href={"#"}>
				Utonto
				<HeaderIcon src={"https://combo.steffo.eu/open/ryg/GenericUser.png"} alt={"⭐ ️"}/>
			</Link>
		]
	};

	return (
		<CurrentPage.Provider value={currentPage}>
		<RoyalnetInstanceUrl.Provider value={"http://lo.steffo.eu:44445"}>

		<div id="app" class={theme.bluelib}>
			<Header left={header.left} right={header.right}/>
			<Router history={createHashHistory()} onChange={onPageChange}>
				<Home path="/"/>
				<div default>
					<Error>
						Pagina non trovata.
					</Error>
				</div>
			</Router>
			<Footer>
				<a href="https://github.com/Steffo99/ryg.steffo.eu">ryg.steffo.eu {process.env.RELEASE}</a>
			</Footer>
		</div>

		</RoyalnetInstanceUrl.Provider>
		</CurrentPage.Provider>
	);
}
