import { Split } from 'bluelib';
import MainTitle from '../components/Elements/MainTitle';
import Wiki from '../components/Elements/Wiki/Wiki';

export default function (props) {
	return (
		<div>
			<MainTitle src={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} alt={"⭐️ "}>Royal Games</MainTitle>
			<Wiki pageId={1}/>
			<Split>
				<Wiki pageId={2}/>
				<Wiki pageId={3}/>
			</Split>
		</div>
	);
}
