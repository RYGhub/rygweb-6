import { Component } from 'preact';
import MainTitle from '../components/maintitle';
import Split from '../components/split';
import WikiPageBox from '../components/wikipagebox';

export default class Homepage extends Component {
	render() {
		return (
			<div>
				<MainTitle imgsrc={"https://combo.steffo.eu/open/ryg/LogoRoyalGames.svg"} imgalt={"⭐"} text={"Royal Games"} />
				<WikiPageBox pageId={"beb9461f-fd9f-4e06-8e3d-8d52e3488550"} titleInBox={true} hideTitle={true}/>
				<Split>
					<div>
						<WikiPageBox pageId={"b6d27403-5586-4426-b6ec-4e286bed0bde"} titleInBox={true} hideTitle={true}/>
					</div>
					<div>
						<WikiPageBox pageId={"7dd2c4a0-2fd4-4995-9d5f-9e23f27e7f0e"} titleInBox={true} hideTitle={true}/>
					</div>
				</Split>
			</div>
		);
	}
}
