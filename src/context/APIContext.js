import React, { useState } from 'react'

//objeto, function
const APIContext = React.createContext([ {}, () => {} ])

const APIProvider = (props) => {

    //definir el state inicial
    const [ auth, guardarAuth ] = useState({
        token: '',
        auth: false
    });

    return (
        <APIContext.Provider value={[auth, guardarAuth]}>
            {props.children}
        </APIContext.Provider>
    );
}
export { APIContext, APIProvider};
