import React, { useState } from "react";

export const FindHashContext = React.createContext({});

export const FindHashProvider = (props) => {
    const [word, setWord ] = useState( 'Natureza');

    return(
        <FindHashContext.Provider value={{word, setWord}}>
            {props.children}
        </FindHashContext.Provider>
    );
}

