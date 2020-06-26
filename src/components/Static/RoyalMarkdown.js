import ReactMarkdown from 'react-markdown';
import AnyLink from '../Dynamic/Link';

export default function (props) {
	return (
		<ReactMarkdown source={props.children} renderers={{
			"link": AnyLink
		}}/>
	);
}
