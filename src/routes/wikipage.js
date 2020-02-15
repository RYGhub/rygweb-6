import { Component } from 'preact';
import style from './wikipage.less';
import Box from '../components/box';
import Loading from '../components/loading';
import WikiMdRenderer from '../components/wikimdrenderer';
import NavbarLink from '../components/navbarlink';

export default class WikiPage extends Component {
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
		let page_contents;
		if(this.state.data === null) {
			page_contents = <Loading/>
		}
		else if(this.state.data.format === "markdown") {
			page_contents = <WikiMdRenderer data={this.state.data}/>
		}
		else {
			page_contents = "Formato sconosciuto: " + this.state.data.format;
		}

		let right = (
			<NavbarLink disabled={true} title={"TODO"} href={`/wiki/${this.props.page_id}/edit`}>Modifica</NavbarLink>
		);

		return (
			<Box left={"Pagina Wiki"} right={right}>
				{page_contents}
			</Box>
		);
	}
}
