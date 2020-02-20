import { Component } from 'preact';
import WikiPageBox from '../components/actionboxes/wikipagebox';

export default class WikiPage extends Component {
	render() {
		return <WikiPageBox pageId={this.props.pageId}/>
	}
}
