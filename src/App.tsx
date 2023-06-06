import { useState } from "react";
import Circle from "./Circle";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  const Button = styled.button`
    background-color: ${(props) => props.theme.btnColor};
  `;
  return (
    <Container>
      <H1>hello</H1>
      <Button>asd</Button>
    </Container>
  );
}

export default App;
