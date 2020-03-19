import { Component } from 'preact';
import LoginBox from '../components/loginbox';
import Box from '../components/box';

export default class Login extends Component {
	render() {
		return (
			<div>
				<LoginBox onSuccessfulLogin={this.props.onSuccessfulLogin}/>
				<Box left={"Biscotti"}>
					<p>
						Effettuando il login, verranno salvati alcuni dati nel <code>localStorage</code> del tuo browser per identificare il tuo account.
					</p>
					<p>
						Non sono esattamente cookie, ma penso che ti potrebbe interessare saperlo in ogni caso.
					</p>
				</Box>
			</div>
		);
	}
}
