import { styled } from 'styled-components';

export const Input = styled.input`
    border: none;
    padding: 5px;
    font-size: 18px;
    border-radius: .5em;
    border: 2px solid #197dc984;
    margin: ${({marginTop})=> marginTop ? marginTop : 0} 20px 20px 20px;

    &:focus{
        border: 2px solid #197dc9;
    }
`