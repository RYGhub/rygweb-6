import { Box, stripTabs } from 'bluelib';
import { Fragment } from 'preact';
import WikiList from '../components/Elements/WikiList';

export default function (props) {
	return (
		<Fragment>
			<Box>
				<WikiList/>
			</Box>
		</Fragment>
	);
}
