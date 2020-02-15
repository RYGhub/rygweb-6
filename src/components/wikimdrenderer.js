import { Component } from 'preact';
import { Converter } from 'showdown';
import style from './wikimdrenderer.less';

export default class WikiMdRenderer extends Component {
	render() {
		const converter = new Converter({
			"tables": true,
			"simpleLineBreaks": true
		});
		let html = converter.makeHtml(this.props.data.contents);

		return (
			<article>
				<h1 class={style.title}>{this.props.data.title}</h1>
				<div dangerouslySetInnerHTML={{
					__html: html
				}}/>
			</article>
		);
	}
}
