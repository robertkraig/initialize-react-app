import React, {useContext, useState} from 'react'
import {YouClickedMe} from "./styles";

const textValues = 'Click Me %0 Times';

export const TextReplacementContext = React.createContext(textValues);
TextReplacementContext.displayName = 'TextReplacementContext';

export function YouClickedMeUseContext({clicked, callClicked} : {clicked: number; callClicked: Function}) {
    const text = useContext(TextReplacementContext);

    return <YouClickedMe onClick={() => {callClicked()}}>
        {`Context Style ${text.replace('%0', String(clicked))}`}
    </YouClickedMe>
}

YouClickedMeUseContext.displayName = 'YouClickedMeUseContext';


export function YouClickedMeContext() {
    const [clicked, setClicked] = useState(0);
    const [textReplacement, setTextReplacement] = useState(textValues);
    return <TextReplacementContext.Provider value={textReplacement}>
        <YouClickedMeUseContext clicked={clicked} callClicked={() => setClicked(clicked + 1)} />
         <input name='replaceText' onChange={(e) => setTextReplacement(e.currentTarget.value)} type="text" value={textReplacement} placeholder={'My Description %0'} />
    </TextReplacementContext.Provider>
}

YouClickedMeContext.displayName = 'YouClickedMeContext';
