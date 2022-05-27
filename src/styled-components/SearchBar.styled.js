import styled from "styled-components";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--light-blue);

  padding: 0.2em 0.5em;
  border-radius: 5px;
  color: var(--blue);
`;

export const InputIcon = styled.div`
  width: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;

  animation-duration: 0.5s;
  animation-name: animate-fade;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;

  .clickable:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  width: 400px;
  border-radius: 5px;
  min-height: 30px;
  position: relative;
  margin: auto;
  margin-left: 0.3rem;
  font-size: 1rem;
  border: none;
  outline: none;

  background-color: transparent;

  &:focus::placeholder {
    color: transparent;
  }
`;
