import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
to { -webkit-transform: rotate(360deg)
`;
export const ListItem = styled.li({
  padding: "10px",
  maxWidth: "600px",
});

export const LoadingSpinner = styled.div({
  display: "inline-block",
  width: 20,
  height: 20,
  border: "3px solid rgba(255,255,255,.3)",
  borderRadius: "50%",
  borderTopColor: "blue",
  animation: `${spin} 1s ease-in-out infinite`,
});
