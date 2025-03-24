import {styled} from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 500px;
    border-radius: .5em;
    flex-direction: column;
    justify-content: center;
    background-color: #D8EBFA;
    width: ${({width}) => width ? width : "30vw"};
    height: ${({height}) => height ? height : "50vh"};
`