import ErrorAbbr from '../Static/ErrorAbbr';
import UserLink from './UserLink';
import {
	faDiscord,
	faGithub,
	faRedditAlien, faSteam, faTelegram,
	faTwitch,
	faTwitter,
	faWikipediaW,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLockOpen, faMagnet, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WikiLink from './WikiLink';
import BaseLink from '../Static/BaseLink';

const userIdRegex = /^\/u\/([0-9]+)$/;
const userAliasRegex = /^\/u\/([A-Za-z]+)$/;
const wikiIdRegex = /^\/w\/([0-9]+)$/;

const icons = Object.freeze({
	"github.com": faGithub,

	"en.wikipedia.org": faWikipediaW,
	"it.wikipedia.org": faWikipediaW,

	"old.reddit.com": faRedditAlien,
	"new.reddit.com": faRedditAlien,
	"www.reddit.com": faRedditAlien,
	"reddit.com": faRedditAlien,

	"twitch.tv": faTwitch,

	"twitter.com": faTwitter,

	"www.youtube.com": faYoutube,
	"youtube.com": faYoutube,
	"youtu.be": faYoutube,

	"t.me": faTelegram,

	"steampowered.com": faSteam,
	"steamcommunity.com": faSteam,

	"discord.gg": faDiscord,
	"discordapp.com": faDiscord,
	"discord.com": faDiscord,
});

export default function (props) {
	// Parse URL
	let url;
	try {
		url = new URL(props.href, window.location.href)
	} catch (e) {
		return (
			<ErrorAbbr error={e}>{props.children}</ErrorAbbr>
		);
	}

	// Icon
	let iconEl = [];
	if(props.icon !== false) {
		let iconObj;

		if (url.protocol === "http:") {
			iconObj = faLockOpen;
		}
		else if(url.protocol === "https:") {
			iconObj = icons[url.host];
			if(iconObj === undefined) {
				iconObj = faExternalLinkAlt;
			}
		}
		else if(url.protocol === "magnet:") {
			iconObj = faMagnet;
		}
		else {
			iconObj = faQuestion;
		}

		iconEl = [<FontAwesomeIcon icon={iconObj}/>, " "]
	}


	// User by ID
	let userIdMatch = url.pathname.match(userIdRegex);
	if(userIdMatch) {
		return (
			<UserLink uid={userIdMatch[1]}>{props.children}</UserLink>
		)
	}

	// User by Alias
	let userAliasMatch = url.pathname.match(userAliasRegex);
	if(userAliasMatch) {
		return <UserLink alias={userAliasMatch[1]}>{props.children}</UserLink>
	}

	// Wiki ID link
	let wikiIdMatch = url.pathname.match(wikiIdRegex);
	if(wikiIdMatch) {
		return <WikiLink pageId={wikiIdMatch[1]}>{props.children}</WikiLink>
	}

	return <BaseLink href={props.href}>{[...iconEl, props.children]}</BaseLink>;
}
