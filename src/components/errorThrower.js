import {Component} from 'preact'

export default class ErrorThrower extends Component {
    render() {
        throw new Error(this.props.children)
    }
}
