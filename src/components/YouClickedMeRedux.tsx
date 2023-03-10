import {Container} from "./styles";
import {YouClickedMePure} from "./YouClickedMePure";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_CLICK_COUNT} from "../actions";

export function YouClickedMeRedux() {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchTodos())
    //     // Safe to add dispatch to the dependencies array
    // }, [dispatch]);

    const count = useSelector((state: Record<string, any>) => state.count)

    const updateClickCount = useCallback(
        () => dispatch({ type: UPDATE_CLICK_COUNT, count: 1 }),
        [dispatch]
    )

    return <Container>
        <YouClickedMePure clicked={count} callClicked={updateClickCount} />
    </Container>
}
