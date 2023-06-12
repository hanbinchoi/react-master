import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  label {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  [type="checkbox"] {
    appearance: none;
    cursor: pointer;
    position: relative;
    border: max(2px, 0.1em) solid tomato;
    border-radius: 1.25em;
    width: 2.25em;
    height: 1.25em;
  }

  [type="checkbox"]::before {
    content: "";
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: tomato;
    transition: left 250ms linear;
  }

  [type="checkbox"]:checked {
    background-color: #1152c4;
    border-color: #1152c4;
  }

  [type="checkbox"]:checked::before {
    background-color: white;
    left: 1em;
  }
`;

interface toggleProps {
  handleToggle: Function;
  mode: boolean;
}

function Toggle({ handleToggle, mode }: toggleProps) {
  function onClick(e: React.MouseEvent<HTMLInputElement>) {
    handleToggle();
  }
  return (
    <Container>
      <label>
        <input role="switch" type="checkbox" onClick={onClick} checked={mode} />
        <span>{mode ? "Dark Mode" : "Light Mode"}</span>
      </label>
    </Container>
  );
}

export default Toggle;
