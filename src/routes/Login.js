import LoginBox from '../components/Elements/LoginBox';
import { Fragment } from 'preact';

export default function (props) {
	return (
		<div>
			<LoginBox onLogin={props.onLogin}/>
		</div>
	);
}
