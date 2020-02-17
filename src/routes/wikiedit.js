import { Component } from 'preact';
import SimpleMDEEditor from 'react-simplemde-editor';
import Box from '../components/box';
import "easymde/dist/easymde.min.css";
import "../styles/override-easymde.less"
import Todo from '../components/todo';
import Loading from '../components/loading';
import style from '../components/wikimdrenderer.less';
import HInput from '../components/hinput';
import HButton from '../components/hbutton';
import HButtonOnce from '../components/hbuttononce';
import Error from '../components/error';
import {route} from 'preact-router';

export default class WikiEdit extends Component {
	constructor() {
		super();
		this.state = {
			"status": "loading",
			"title": null,
			"contents": null,
			"format": null,
			"theme": null
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		if(this.props.page_id !== null) {
			fetch("https://rygapi.steffo.eu/api/wiki/get/v1?id=" + this.props.page_id).then((response) => {
				return response.json();
			}).then((json) => {
				this.setState({
					"status": "loaded",
					"title": json.data.title,
					"contents": json.data.contents,
					"format": json.data.format,
					"theme": json.data.theme
				});
			})
		}
		else {
			this.setState({
				"status": "loaded",
				"format": "markdown",
				"theme": "default"
			});
		}
	};

	onTitleChange = e => {
		this.setState({
			"title": e.target.value
		})
	};

	onContentsChange = value => {
		this.setState({
			"contents": value
		})
	};

	onFormatChange = e => {
		this.setState({
			"format": e.target.value
		})
	};

	onThemeChange = e => {
		this.setState({
			"theme": e.target.value
		})
	};

	onSaveClick = e => {
		this.setState({
			"status": "saving"
		});
		fetch("https://rygapi.steffo.eu/api/wiki/edit/v1", {
			method: "POST",
			body: JSON.stringify({
				"token": this.props.loggedIn.token,
				"id": this.props.page_id,
				"title": this.state.title,
				"format": this.state.format,
				"theme": this.state.theme,
				"contents": this.state.contents
			})
		}).then((response) => {
			return response.json()
		}).then((json) => {
			route(`/wiki/${this.props.page_id}`)
		})
	};

	render() {
		let editor;
		if(this.props.loggedIn === null) {
			editor = <Error>Devi essere loggato per modificare le Pagine Wiki.</Error>
		}
		else if(this.state.status === "loading") {
			editor = <Loading/>;
		}
		else if(this.state.status === "loaded") {
			editor = (
				<article>
					<HInput label={"Titolo"} type={"text"} value={this.state.title} onChange={this.onTitleChange}/>
					<HInput label={"Formato"} type={"text"} value={this.state.format} disabled={true} onChange={this.onFormatChange}/>
					<SimpleMDEEditor
						onChange={this.onContentsChange}
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
						value={this.state.contents}/>
					<HInput label={"Tema"} type={"text"} value={this.state.theme} disabled={true} onChange={this.onThemeChange}/>
					<HButton label={"Salva"} onClick={this.onSaveClick}/>
				</article>
			)
		}
		if(this.state.status === "saving") {
			editor = <Loading text={"Salvataggio in corso..."}/>;
		}

		return (
			<Box left={"Modifica Pagina Wiki"}>
				{editor}
			</Box>
		);
	}
}
