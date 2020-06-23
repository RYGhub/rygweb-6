import LoginBox from '../components/Elements/LoginBox';

export default function (props) {
	return (
		<div>
			<LoginBox onLogin={props.onLogin}/>
		</div>
	);
}
