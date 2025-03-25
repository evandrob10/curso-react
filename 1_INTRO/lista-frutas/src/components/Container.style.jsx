import { styled } from 'styled-components';
//hooks
import { useState } from 'react';
//components
import { Item } from './Item.style';
import { ContainerInputsFrutasStyled } from '../components/ContainerInputsFrutas.style';

const Container = ({ className}) => {
    const itemsHead = ["Nome:","Preço:"];
    const [frutas, setFruta] = useState([])

    return(
        <>
            <table className={className}>
                <caption>
                    <ContainerInputsFrutasStyled frutas={frutas} setFruta={setFruta} />                    
                </caption>    
                <thead>
                    <tr>
                        {itemsHead.map((item, index)=>(<th key={index}>{item}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {frutas.map((item, index)=>(<tr><Item key={index}>{item.name}</Item><Item>{item.price}</Item></tr>))}
                </tbody>
            </table>
        </>
    )
}

export const Wrapper = styled(Container)`
    width: 60%;
    border-spacing: 0;
    & th{
        border-bottom: 1px solid;
    }
    & caption{
        margin-bottom: 5%;
    }
` 