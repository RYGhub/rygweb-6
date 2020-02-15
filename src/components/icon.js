import { Component } from 'preact';
import icons from './icon.css'

class Icon extends Component {
	render() {
		return (
			<i class={icons.fa + " " + this.props.icon} />
		);
	}
}

export {Icon, icons};
