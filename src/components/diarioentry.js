import { Component } from 'preact';
import style from './diarioentry.less';
import RoyalnetUser from './royalnetuser';

export default class DiarioEntry extends Component {
	render() {
		let author;
		if(this.props.data.quoted_account === null) {
			author = <span class={style.author}>{this.props.data.quoted}</span>
		}
		else {
			author = <RoyalnetUser class={style.author} data={this.props.data.quoted_account}/>
		}

		let creator = "";
		if (this.props.data.creator !== null) {
			creator = <RoyalnetUser class={style.creator} data={this.props.data.creator}/>
		}

		let context = "";
		if(this.props.data.context !== null) {
			context = <span>, <span class={style.context}>{this.props.data.context}</span></span>
		}

		return (
			<blockquote class={style.diarioentry}>
				<div class={style.topleft}>
					<div class={style.text}>
						{this.props.data.text}
					</div>
				</div>
				<div class={style.bottomleft}>
					<div class={style.info}>
						— {author}{context}
					</div>
				</div>
				<div class={style.topright}>
					<div class={style.save}>
						{creator}
						&nbsp;|&nbsp;
						<span className={style.timestamp}>
							{new Date(this.props.data.timestamp).toDateString()}
						</span>
					</div>
				</div>
				<div class={style.bottomright}>
					 <a className={style.diarioid} href={`/diario/${this.props.data.diario_id}`}>#{this.props.data.diario_id}</a>
				</div>
			</blockquote>
		);
	}
}
