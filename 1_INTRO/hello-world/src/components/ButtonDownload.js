import React from 'react';

const ButtonDownload = props =>{
    return(
        <a href={props.link} target='_blank'>
            <button>Baixar</button>
        </a>
    )
}

export default ButtonDownload;