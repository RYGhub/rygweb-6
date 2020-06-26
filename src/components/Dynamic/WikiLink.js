import { useRoyalnetData } from 'bluelib';
import StaticWikiLink from '../Static/StaticWikiLink';

export default function (props) {
	let [data, error] = useRoyalnetData("GET", "/api/wiki/v2", {
		page_id: props.pageId
	});

	return (
		<StaticWikiLink data={data}>
			{props.child}
		</StaticWikiLink>
	);
}
