import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado"
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela]= useState(1)
  const [renderCadastro, setRenderCadastro] = useState(1)

  const cadastro = () => {
    setTela(2)
  }

  const possuoCadastro = () => {
    setTela(1)
  }

  const renderTelaCadastro = () => {
    setRenderCadastro(2)
  }
  console.log(renderCadastro)
  console.log('Estou na tela',tela)
  return (
    <MainContainer >
      <GlobalStyled />
      {tela === 1 ? <TelaLogin cadastro={cadastro}/> : <TelaCadastro possuoCadastro={possuoCadastro}/>}
    </MainContainer>
  );
}

export default App;