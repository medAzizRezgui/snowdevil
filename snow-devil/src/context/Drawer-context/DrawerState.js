import React, { useState } from 'react'
import DrawerContext from './DrawerContext';


function DrawerState(props) {
    const [show, setshow] = useState(false)
    return (
        <DrawerContext.Provider values={{
            show, setshow

        }}
        >
            {props.children}

        </DrawerContext.Provider>
    )
}

export default DrawerState
