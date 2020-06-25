import InstanceSelectBox from '../components/Elements/InstanceSelectBox';
import { Fragment } from 'preact';

export default function (props) {
	return (
		<div>
			<InstanceSelectBox onConfirm={props.onConfirm}/>
		</div>
	);
}
