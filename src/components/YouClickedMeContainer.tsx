import {Container} from "./styles";
import {YouClickedMeNew} from "./YouClickedMeNew";
import {YouClickedMeOld} from "./YouClickedMeOld";
import {YouClickedMePure} from "./YouClickedMePure";
import React, {useState} from "react";
import {YouClickedMeContext} from "./YouClickedMeUseContext";

export function YouClickedMeContainer() {
    const [clicked, setClicked ] = useState(0);

    return <Container>
        <YouClickedMePure clicked={clicked} callClicked={() => setClicked(clicked + 1)} />
    </Container>
}
