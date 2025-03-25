import { styled } from 'styled-components';

const Input = ({className, labelDescription , inputType, inputHolder, id, setName, setPrice}) => {
    return(
        <div className={className}>
            <label>{labelDescription}</label>
            <input type={inputType} placeholder={inputHolder} onChange={(event)=>{
                if(id === "nameInput") setName(event.target.value);
                if(id === "priceInput") setPrice(event.target.value);
            }}/>
        </div>
    )
}

export const InputFrutas = styled(Input)`
    display: flex;
    font-size: 18px;
    flex-wrap: nowrap;
    align-items: center;
    width: ${({widthInput}) => widthInput};
    & label {
        margin-right: 5px;
    }
    & input{
        padding: 5px;
        border-radius: .5em;       
    }
`