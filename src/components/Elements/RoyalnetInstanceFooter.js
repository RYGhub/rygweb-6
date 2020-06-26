import { useContext } from 'preact/hooks';
import { RoyalnetInstanceUrl } from 'bluelib';
import Link from './Link';

export default function (props) {
	const royalnetInstanceUrl = useContext(RoyalnetInstanceUrl);

	return (
		<Link href={`${royalnetInstanceUrl}/docs`}>
			{royalnetInstanceUrl}
		</Link>
	);
}
