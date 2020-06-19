import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDiscord,
	faGithub,
	faRedditAlien, faSteam, faTelegram,
	faTwitch,
	faTwitter,
	faWikipediaW, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLockOpen } from '@fortawesome/free-solid-svg-icons';

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
	const url = new URL(props.href);

	let icon = null;

	if (url.protocol === "http:") {
		icon = faLockOpen;
	}

	else if(url.protocol === "https:") {
		icon = icons[url.host];
		if(icon === undefined) {
			icon = faExternalLinkAlt;
		}
	}

	return (
		<Link href={props.href}>
			<FontAwesomeIcon icon={icon}/> {props.children}
		</Link>
	);
}
