import { Component } from 'preact';
import WikiListBox from '../components/wikiListBox';
import WikiPageBox from '../components/wikipagebox';

export default class WikiList extends Component {
	render() {
		return (
			<div>
				<WikiPageBox pageId={"7337189e-ab4a-4487-bc8c-3a2285c6b4b3"}/>
				<WikiListBox/>
			</div>
		);
	}
}
