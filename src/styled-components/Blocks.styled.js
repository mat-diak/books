import styled from "styled-components";

export const UnderlineLightBlue = styled.div`
  border-bottom: 1px solid var(--blue-1);
`;

export const Underline = styled.div`
  border-bottom: ${({ weight }) => weight} solid ${({ color }) => color};
`;
