import {Component, Fragment} from 'preact'
import Error from "./error";

export default class ErrorCatcher extends Component {
    constructor() {
        super();
        this.state = {
            "error": null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            "error": error
        });
        console.error(error);
    }

    render() {
        if(this.state.error == null) {
            return <Fragment>{this.props.children}</Fragment>
        }

        else if(this.state.error.name !== undefined && this.state.error.message !== undefined) {
            return <Error><b>{this.state.error.name}</b>: {this.state.error.message}</Error>
        }

        else if(typeof this.state.error === "string" || this.state.error instanceof String) {
            return <Error>{this.state.error}</Error>
        }

        else {
            return <Error>An error of an unknown type occured.</Error>
        }
    }
}
