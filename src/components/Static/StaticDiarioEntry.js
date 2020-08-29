import style from './StaticDiarioEntry.less';
import { BaseLink, concatClass, Image } from 'bluelib';
import StaticUserLink from './StaticUserLink';

export default function (props) {
	// Image
	let image = null;
	if(props.data.media_url !== null) {
		image = (
			<Image class={style.image} src={props.data.media_url} alt={"[Immagine]"}/>
		)
	}

	// Text
	let text = null;
	if(props.data.text !== null) {
		text = (
			<div class={style.text}>
				{props.data.text}
			</div>
		)
	}

	// Spoiler
	let blockquoteClass = concatClass(style.diarioEntry, props.class);
	if(props.data.spoiler) {
		blockquoteClass = concatClass(blockquoteClass, style.spoilerEntry);
	}
	if(props.highlighted) {
		blockquoteClass = concatClass(blockquoteClass, style.highlightedEntry);
	}

	// Context
	let context = null;
	if(props.data.context) {
		context = <span class={style.context}>, {props.data.context}</span>
	}

	// Author
	let author = null;
	if(props.data.quoted_account !== null) {
		author = <span class={style.author}>— <StaticUserLink data={props.data.quoted_account}>{props.data.quoted_account.username}</StaticUserLink></span>
	}
	else if(props.data.quoted !== null) {
		author = <span class={style.author}>— {props.data.quoted}</span>
	}

	// Creator (saved by)
	let creator = null;
	if(props.data.creator !== null) {
		creator = <span class={style.creator}><StaticUserLink data={props.data.creator}>{props.data.creator.username}</StaticUserLink></span>
	}

	// Timestamp
	let timestamp = null;
	if(props.data.timestamp !== null) {
		timestamp = (
			<time class={style.timestamp}>
				{new Date(this.props.data.timestamp).toLocaleString()}
			</time>
		)
	}

	// ID
	let id = (
		<BaseLink href={`/d/${props.data.diario_id}`} className={style.id}>/d/{props.data.diario_id}</BaseLink>
	);


	// Creator | Timestamp separator
	let ctSeparator = null;
	if(creator && timestamp) {
		ctSeparator = " | ";
	}

	// ID | Creator | Timestamp separator
	let icSeparator = null;
	if(creator || timestamp) {
		icSeparator = " | ";
	}

	return (
		<blockquote class={blockquoteClass}>
			<div class={style.content}>
				{image}
				{text}
			</div>
			<div class={style.authorInfo}>
				{author}
				{context}
			</div>
			<div class={style.saveInfo}>
				{creator}
				{ctSeparator}
				{timestamp}
				{icSeparator}
				{id}
			</div>
		</blockquote>
	);
}
