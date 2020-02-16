import { Component } from 'preact';
import style from './wikilist.less';
import Loading from '../components/loading';
import Box from '../components/box';
import NavbarLink from '../components/navbarlink';

export default class WikiList extends Component {
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
						<NavbarLink href={"/wiki/" + page.page_id}>{page.title}</NavbarLink>
					</li>
				)
			})
		}

		return (
			<Box left={"Indice Wiki"}>
				<ul class={style.list}>
					{pages}
				</ul>
			</Box>
		);
	}
}
