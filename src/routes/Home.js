import { Box } from 'bluelib';
import IconLink from '../components/IconLink';
import UserLink from '../components/UserLink';
import { Fragment } from 'preact';

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
					<li><UserLink uid={3}/></li>
				</ul>
			</Box>
		</Fragment>
	);
}
