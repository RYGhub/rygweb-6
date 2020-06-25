import { Box, Split, stripTabs } from 'bluelib';
import { Fragment } from 'preact';
import MainTitle from '../components/Elements/MainTitle';
import WikiBox from '../components/Elements/WikiBox';

export default function (props) {
	return (
		<div>
			<MainTitle src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐️ "}>Royal Games</MainTitle>
			<WikiBox pageId={1}/>
			<Split>
				<WikiBox pageId={2}/>
				<WikiBox pageId={3}/>
			</Split>
		</div>
	);
}
