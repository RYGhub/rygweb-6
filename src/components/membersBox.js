import { Component } from 'preact';
import Box from './box';
import Loading from './loading';
import Link from './link';
import style from './membersBox.less';


export default class MembersBox extends Component {
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
		fetch("https://rygapi.steffo.eu/api/user/list/v1").then((response) => {
			return response.json();
		}).then((json) => {
			let d = json.data;
			d.sort((a, b) => {
				if(a.username < b.username) {
					return -1;
				}
				else if(a.username > b.username) {
					return 1;
				}
				else {
					return 0;
				}
			});
			this.setState({"data": d});
		})
	};

	render() {
		let members = <Loading/>;
		if(this.state.data !== null) {
			members = this.state.data.map((m) => <li><Link href={`/user/${m.uid}`}>{m.username}</Link></li>)
		}

		return (
			<Box left={"Membri"}>
				<ul class={style.list}>
					{members}
				</ul>
			</Box>
		);
	}
}
