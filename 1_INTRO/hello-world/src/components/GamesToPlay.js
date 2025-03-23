import React from "react";
//Components
import ButtonDownload from "./ButtonDownload";

const GamesToPlay = props =>{
    return(
        <div>
            <img src={props.img} alt={props.altImg} />
            <ButtonDownload link={props.link} />
        </div>
    )
}

export default GamesToPlay;