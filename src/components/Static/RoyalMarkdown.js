import ReactMarkdown from 'react-markdown';
import AnyLink from '../Dynamic/Link';
import { Image } from 'bluelib';
import style from './RoyalMarkdown.less';

export default function (props) {
	return (
		<div class={style.royalmarkdown}>
			<ReactMarkdown
				source={props.children}
				renderers={{
					"link": AnyLink,
					"image": Image
				}}
				escapeHtml={false}
			/>
		</div>
	);
}
