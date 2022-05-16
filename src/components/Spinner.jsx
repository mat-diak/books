import SpinnerStyled from "../styled-components/Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className="loader">Loading...</div>
    </SpinnerStyled>
  );
};

export default Spinner;
