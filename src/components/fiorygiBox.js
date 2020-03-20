import { Component } from 'preact';
import Loading from './loading';
import Box from './box';
import style from './fiorygiBox.less';
import InvisiTable from './invisiTable';
import ChangeNumber from './changeNumber';

export default class FiorygiBox extends Component {
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
		fetch(`https://rygapi.steffo.eu/api/user/fiorygi/get/v1?id=${this.props.user.uid}`).then(response => response.json()).then((j) => {
			this.setState({
				"data": j.data
			});
		})
	};

	render() {
		let contents = <Loading/>;

		if(this.state.data !== null) {
			let tablerows = this.state.data.transactions.map((t, index) => {
				return (
					<tr key={index}>
						<td class={style.amount}><ChangeNumber>{t.change}</ChangeNumber></td>
						<td>{t.reason}</td>
					</tr>
				);
			});

			contents = (
				<div>
					<InvisiTable class={style.transactiontable}>
						<tbody>
							<tr class={style.fiorygi}>
								<td class={style.amount}><ChangeNumber>{this.state.data.fiorygi}</ChangeNumber></td>
								<td>fiorygi totali</td>
							</tr>
							{tablerows}
						</tbody>
					</InvisiTable>
				</div>
			)
		}

		return (
			<Box left={"Fiorygi"}>
				{contents}
			</Box>
		);
	}
}
