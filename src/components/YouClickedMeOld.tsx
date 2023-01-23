import {Component} from 'react'
import {YouClickedMe} from "./styles";

export class YouClickedMeOld extends Component {
    displayName = 'YouClickedMeOld';
    state = {
        clicked: 0,
    }
    setClicked() {
        this.setState({
            clicked: this.state.clicked + 1,
        })
    }
    render() {
        return <YouClickedMe onClick={() => {this.setClicked()}}>
            {`Old Style Click Me ${this.state.clicked} Times`}
        </YouClickedMe>
    }
}
