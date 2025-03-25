import React from 'react';
//Components
import { Wrapper } from '../components/Container.style';
//Styled's
import styled from 'styled-components';

const Produtos = ({className}) => {
    return(
        <div className={className}>
            <Wrapper />
        </div>
    )
}

const ProdutosStyle = styled(Produtos)`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export default ProdutosStyle;