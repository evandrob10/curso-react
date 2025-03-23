import React from 'react'
//Components
import TwoComponent from './TwoComponent';

const FirstComponent = () =>{
    const name = 'Evandro Barros';

    return(
        <>
            <p>Seu nome é: {console.log(name)}</p>
            <TwoComponent />
        </>
    )
}
export default FirstComponent;