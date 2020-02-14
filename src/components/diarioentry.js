import { Component } from 'preact';
import style from './diarioentry.less';
import RoyalnetUser from './royalnetuser';

export default class DiarioEntry extends Component {
	render() {
		let mainclass = style.diarioentry;
		if(this.props.data.spoiler === true) {
			mainclass += " " + style.spoiler;
		}

		let media = "";
		if(this.props.data.media_url !== null) {
			media = <a href={this.props.data.media_url}><img src={this.props.data.media_url} alt={"[immagine]"}/></a>
		}

		let author;
		if(this.props.data.quoted_account === null) {
			if(this.props.data.quoted !== null) {
				author = <span className={style.author}>{this.props.data.quoted}</span>;
			}
			else {
				author = "";
			}
		}
		else {
			author = <RoyalnetUser class={style.author} data={this.props.data.quoted_account}/>
		}

		let context = "";
		if(this.props.data.context !== null) {
			context = <span>, <span class={style.context}>{this.props.data.context}</span></span>
		}

		let info = "";
		if(author !== "" || context !== "") {
			info = (
				<div className={style.info}>
					— {author}{context}
				</div>
			)
		}

		let creator = "";
		if (this.props.data.creator !== null) {
			creator = <span><RoyalnetUser class={style.creator} data={this.props.data.creator}/>&nbsp;|&nbsp;</span>
		}

		return (
			<blockquote class={mainclass}>
				<div class={style.topleft}>
					<div class={style.media}>
						{media}
					</div>
					<div class={style.text}>
						{this.props.data.text}
					</div>
				</div>
				<div class={style.bottomleft}>
					{info}
				</div>
				<div class={style.topright}>
					<div class={style.save}>
						{creator}
						<time className={style.timestamp}>
							{new Date(this.props.data.timestamp).toLocaleString()}
						</time>
					</div>
				</div>
				<div class={style.bottomright}>
					 <a className={style.diarioid} href={`/diario/${this.props.data.diario_id}`}>#{this.props.data.diario_id}</a>
				</div>
			</blockquote>
		);
	}
}
