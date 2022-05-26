import styled from "styled-components";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid var(--blue);

  padding: 0 0.3em;
  border-radius: 5px;
  color: var(--blue);

  svg {
    width: 100%;
  }
`;

export const InputIcon = styled.div`
  height: 20px;
  width: 20px;
`;

export const Input = styled.input`
  width: 400px;
  border-radius: 5px;
  min-height: 30px;
  position: relative;
  padding-left: 0.1em;
  margin: auto;
  margin-left: 0.1rem;
  font-size: 1rem;
  border: none;
  outline: none;

  background-color: transparent;

  &:focus::placeholder {
    color: transparent;
  }
`;
