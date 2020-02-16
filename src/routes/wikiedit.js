import { Component } from 'preact';
import SimpleMDEEditor from 'react-simplemde-editor';
import Box from '../components/box';
import "easymde/dist/easymde.min.css";
import "../styles/override-easymde.less"
import Todo from '../components/todo';
import Loading from '../components/loading';
import style from '../components/wikimdrenderer.less';

export default class WikiEdit extends Component {
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
		fetch("https://rygapi.steffo.eu/api/wiki/get/v1?id=" + this.props.page_id).then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let editor;
		if(this.state.data === null) {
			editor = <Loading/>;
		}
		else {
			editor = (
				<article>
					<h1 className={style.title}>{this.state.data.title}</h1>
					<SimpleMDEEditor
						options={{
							spellChecker: false,
							blockStyles: {
								"bold": "**",
								"code": "```",
								"italic": "_"
							},
							indentWithTabs: false,
							toolbar: ["bold", "italic", "|", "heading-smaller", "heading-bigger", "|", "code", "quote", "unordered-list", "ordered-list", "|", "link", "image", "table", "horizontal-rule", "|", "guide"]
						}}
						value={this.state.data.contents}/>
					<p>
						<Todo>TODO: non è ancora possibile salvare le modifiche, in quanto non è ancora possibile effettuare il login!</Todo>
					</p>
				</article>
			)
		}

		return (
			<Box left={"Modifica Pagina Wiki"}>
				{editor}
			</Box>
		);
	}
}
