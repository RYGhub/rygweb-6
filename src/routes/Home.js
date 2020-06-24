import { Box, stripTabs } from 'bluelib';
import { Fragment } from 'preact';
import MainTitle from '../components/Elements/MainTitle';

export default function (props) {
	return (
		<Fragment>
			<MainTitle src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐️ "}>Royal Games</MainTitle>
		</Fragment>
	);
}
