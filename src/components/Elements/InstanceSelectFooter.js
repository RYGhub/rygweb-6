import { useContext } from 'preact/hooks';
import { RoyalnetInstanceUrl } from 'bluelib';

export default function (props) {
	const royalnetInstanceUrl = useContext(RoyalnetInstanceUrl);

	return (
		<a href={"/instanceselect"}>
			{royalnetInstanceUrl}
		</a>
	);
}
