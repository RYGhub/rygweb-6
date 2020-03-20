import { Component } from 'preact';
import WikiPageBox from '../components/wikipagebox';
import DiarioBox from '../components/diarioBox';

export default class Diario extends Component {
	render() {
		return (
			<div>
				<WikiPageBox pageId={"2ec59f78-5e63-49b4-9b70-ff1e13686749"}/>
				<DiarioBox/>
			</div>
		);
	}
}
