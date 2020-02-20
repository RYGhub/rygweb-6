import { Component } from 'preact';
import { Converter } from 'showdown';

export default class MarkdownRenderer extends Component {
	render() {
		const converter = new Converter({
			"tables": true,
			"simpleLineBreaks": true
		});
		let html = converter.makeHtml(this.props.data.contents);

		return (
			<article>
				<div dangerouslySetInnerHTML={{
					__html: html
				}}/>
			</article>
		);
	}
}
