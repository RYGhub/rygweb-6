import ReactMarkdown from 'react-markdown';
import AnyLink from '../Dynamic/Link';
import { Image } from 'bluelib';

export default function (props) {
	return (
		<ReactMarkdown
			source={props.children}
			renderers={{
				"link": AnyLink,
				"image": Image
			}}
			escapeHtml={false}
		/>
	);
}
