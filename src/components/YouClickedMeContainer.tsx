import {Container} from "./styles";
import {YouClickedMePure} from "./YouClickedMePure";
import React, {useState} from "react";

export function YouClickedMeContainer() {
    const [clicked, setClicked ] = useState(0);

    return <Container>
        <YouClickedMePure clicked={clicked} callClicked={() => setClicked(clicked + 1)} />
    </Container>
}
