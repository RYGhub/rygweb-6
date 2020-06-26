import IconLink from './IconLink';
import ErrorAbbr from './ErrorAbbr';
import Link from './Link';
import UserLink from './Dynamic/UserLink';
import { concatClass } from 'bluelib';
import style from './Link.less';

const userIdRegex = /^\/u\/([0-9]+)$/;
const userAliasRegex = /^\/u\/([A-Za-z]+)$/;

export default function (props) {
	if(props.href === "#")
	{
		return (
			<span className={concatClass(style.link, style.disabled, props.class)}>{props.children}</span>
		);
	}

	let url;
	try {
		url = new URL(props.href, window.location.href)
	} catch (e) {
		return (
			<ErrorAbbr error={e}>{props.children}</ErrorAbbr>
		);
	}

	if(window.location.host !== url.host) {
		return <IconLink href={url}>{props.children}</IconLink>
	}

	let userIdMatch = url.pathname.match(userIdRegex);
	console.log(userIdMatch);
	if(userIdMatch) {
		return <UserLink uid={userIdMatch[1]}>{props.children}</UserLink>
	}

	let userAliasMatch = url.pathname.match(userAliasRegex);
	if(userAliasMatch) {
		return <UserLink alias={userAliasMatch[1]}>{props.children}</UserLink>
	}

	return (
		<Link href={props.href}>{props.children}</Link>
	);
}
