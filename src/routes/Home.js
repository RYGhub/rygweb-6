import { RoyalnetLoginStatus, Split } from 'bluelib';
import MainTitle from '../components/Static/MainTitle';
import Wiki from '../components/Dynamic/WikiExisting';
import { useContext } from 'preact/hooks';

export default function (props) {
	const loginStatus = useContext(RoyalnetLoginStatus);

	let left;
	if(loginStatus) {
		left = <Wiki pageId={84}/>;
	}
	else {
		left = <Wiki pageId={1}/>;
	}

	return (
		<div>
			<MainTitle src={"https://ryg.s3.fr-par.scw.cloud/logos/blue/logo.svg"} alt={"⭐️ "}>Royal Games</MainTitle>
			<Split>
				{left}
				<Wiki pageId={3}/>
			</Split>
		</div>
	);
}
