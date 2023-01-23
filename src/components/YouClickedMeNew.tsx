import { useState } from 'react';
import {YouClickedMe} from "./styles";

export function YouClickedMeNew() {
    const [clicked, setClicked] = useState(0);
    return <YouClickedMe onClick={() => {setClicked(clicked + 1)}}>
        {`New Style Click Me ${clicked} Times`}
    </YouClickedMe>
}
YouClickedMeNew.displayName = 'YouClickedMeNew';
