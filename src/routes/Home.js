import { Box, stripTabs } from 'bluelib';
import IconLink from '../components/Elements/IconLink';
import UserLink from '../components/Elements/UserLink';
import { Fragment } from 'preact';
import RoyalMarkdown from '../components/Rendering/RoyalMarkdown';

export default function (props) {
	return (
		<Fragment>
			<Box>
				Ciao!
			</Box>
			<Box>
				Questi sono alcuni IconLink di prova:
				<ul>
					<li><IconLink href={"https://discord.gg/UpuU9Y4"}>Discord</IconLink></li>
					<li><IconLink href={"https://steamcommunity.com/groups/royalgamescastle"}>Steam</IconLink></li>
					<li><IconLink href={"https://www.youtube.com/channel/UCR_ONjCjfmHKzHImw_SMvhA"}>Youtube</IconLink></li>
					<li><IconLink href={"https://www.reddit.com/r/royalgames"}>Subreddit</IconLink></li>
				</ul>
			</Box>
			<Box>
				Questi sono alcuni UserLink di prova:
				<ul>
					<li><UserLink uid={1}/></li>
					<li><UserLink uid={2}/></li>
					<li><UserLink uid={999}/></li>
				</ul>
				Con gli alias:
				<ul>
					<li><UserLink alias={"steffo"}/></li>
					<li><UserLink alias={"malco"}/></li>
					<li><UserLink alias={"mallllco"}/></li>
				</ul>
			</Box>
			<Box>
				Questa è una prova di rendering RYG Markdown:
				<RoyalMarkdown>{stripTabs(String.raw`
					# ciaooooooooooo

					[](/u/steffo)
					
					[AAAAAAAAAAAA](/u/vik)
				`)}</RoyalMarkdown>
			</Box>
		</Fragment>
	);
}
