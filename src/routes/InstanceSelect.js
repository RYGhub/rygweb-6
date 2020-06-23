import InstanceSelectBox from '../components/Elements/InstanceSelectBox';

export default function (props) {
	return (
		<div>
			<InstanceSelectBox onConfirm={props.onConfirm}/>
		</div>
	);
}
