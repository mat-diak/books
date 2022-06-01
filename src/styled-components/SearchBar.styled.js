import styled from "styled-components";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--grey-1);
  color: var(--grey-2);

  padding: 0.2em 0.5em;
  border-radius: 5px;
`;

export const InputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;

  width: 20px;

  .clickable:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  position: relative;

  background-color: transparent;
  color: var(--grey-3);

  width: 400px;
  border-radius: 5px;
  min-height: 30px;
  font-size: 1rem;

  margin: auto;
  margin-left: 0.3rem;
  border: none;
  outline: none;

  &:focus::placeholder {
    color: transparent;
  }
`;
