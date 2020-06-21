import ReactMarkdown from 'react-markdown';
import AnyLink from '../Elements/Links/AnyLink';

export default function (props) {
	return (
		<ReactMarkdown source={props.children} renderers={{
			"link": AnyLink
		}}/>
	);
}
