import { Component } from 'preact';
import style from './wikilistbox.less';
import Loading from './loading';
import Box from './box';
import Link from './link';

export default class WikiListBox extends Component {
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
		fetch("https://rygapi.steffo.eu/api/wiki/list/v1").then((response) => {
			return response.json();
		}).then((json) => {
			this.setState({"data": json.data});
		})
	};

	render() {
		let pages;
		if(this.state.data === null) {
			pages = <Loading/>
		}
		else {
			pages = this.state.data.map((page) => {
				return (
					<li>
						<Link href={"/wiki/" + page.page_id}>{page.title}</Link>
					</li>
				)
			})
		}

		let right = <a href={"/wiki/new"}>Nuova</a>;

		return (
			<Box left={"Indice Wiki"} right={right}>
				<ul class={style.list}>
					{pages}
				</ul>
			</Box>
		);
	}
}
