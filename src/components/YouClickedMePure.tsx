import {PureComponent} from 'react'
import {YouClickedMe} from "./styles";

interface Props {
    clicked: number;
    callClicked: Function
}

export class YouClickedMePure extends PureComponent<Props> {
    displayName = 'YouClickedMePure';
    static defaultProps: Props = {
        clicked: 0,
        callClicked: () => {}
    }

    render() {
        return <YouClickedMe onClick={() => {this.props.callClicked()}}>
            {`Pure Style Click Me ${this.props.clicked} Times`}
        </YouClickedMe>
    }
}
