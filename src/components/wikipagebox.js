import { Component } from 'preact';
import style from './wikipagebox.less';
import Loading from './loading';
import MarkdownRenderer from './markdownrenderer';
import Box from './box';

export default class WikiPageBox extends Component {
	constructor() {
		super();
		this.state = {
			"data": null
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		fetch("https://rygapi.steffo.eu/api/wiki/get/v1?id=" + this.props.pageId).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let title = <Loading/>;
		let contents = <Loading/>;

		if(this.state.data != null) {
			title = this.state.data.title;

			if(this.state.data.format === "markdown") {
				contents = (
					<div>
						{this.props.hideTitle ? "" : <h1 className={style.title}>{this.state.data.title}</h1>}
						<div className={style.contents}>
							<MarkdownRenderer data={this.state.data}/>
						</div>
					</div>
				)
			}
			else {
				contents = "Formato sconosciuto: " + this.state.data.format;
			}
		}

		let right = [
			<a href={`/wiki/${this.props.pageId}/edit`}>Modifica</a>
		];

		return (
			<Box left={this.props.titleInBox ? title : "Wiki"} right={right} class={style.page}>
				{contents}
			</Box>
		);
	}
}
