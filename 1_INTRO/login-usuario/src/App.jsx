import React from 'react';
//Components
import { Wrapper } from './components/Wrapper.style';
import { Container } from './components/Container.style';
import { Input } from './components/input.style';
import { ButtonLogar } from './components/Button.style';
import { Img } from './components/Img.style';

function App() {
  return (
    <Wrapper>
        <Container>
          <Img />
          <Input placeholder='Digite seu usuario' marginTop="20px"></Input>
          <Input type='password' placeholder='Digite sua senha'></Input>
          <Container width="100%" height="10%">
            <ButtonLogar>ENTRAR</ButtonLogar>
          </Container>
        </Container>
    </Wrapper>
  )
}
export default App
