import { useContext } from 'preact/hooks';
import { RoyalnetInstanceUrl } from 'bluelib';
import Link from './Links/Link';

export default function (props) {
	const royalnetInstanceUrl = useContext(RoyalnetInstanceUrl);

	return (
		<Link href={"/instanceselect"}>
			{royalnetInstanceUrl}
		</Link>
	);
}
