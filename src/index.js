// noinspection ES6UnusedImports
import "bluelib/dist/index.css";
import { BoxColors, theme } from 'bluelib';
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
			</Link>,
			" | ",
			<Link href={"#"}>
				Diario
			</Link>,
			" | ",
			<Link href={"#"}>
				Wiki
			</Link>,
			" | ",
			<Link href={"#"}>
				Membri
			</Link>,
			" | ",
			<Link href={"#"}>
				Statistiche
			</Link>,
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

		</CurrentPage.Provider>
	);
}
