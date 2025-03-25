//Hooks
import { useState } from 'react';
//Styled
import { styled } from 'styled-components';
//Components:
import { Button } from './Button.style';
import { InputFrutas } from './Inputs.style';

const ContainerInputsFrutas = ({className , frutas, setFruta})=> {
    const [name, setNome] = useState();
    const [price, setPrice] = useState();

    return (
        <div className={className}>
            <InputFrutas labelDescription="Nome:" inputHolder="Ex.: Marça" inputType="text" id="nameInput" setName={setNome}/>
            <InputFrutas labelDescription="Preço:" widthInput="30%" inputHolder="0,00" inputType="number"  id="priceInput" setPrice={setPrice}/>
            <Button onClick={()=>{
                setFruta(frutas.concat([{name:name,price:price}]));
            }}>INSERIR</Button>
        </div>
    )
}

export const ContainerInputsFrutasStyled = styled(ContainerInputsFrutas)`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`