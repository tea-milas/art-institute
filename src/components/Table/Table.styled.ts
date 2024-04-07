import styled from "@emotion/styled";

const greyBorder = "1px solid grey";

export const Table = styled.table({
  border: greyBorder,
  borderCollapse: "collapse",
  marginBottom: "50px",

  th: {
    border: greyBorder,
    cursor: "pointer",
  },
});

export const Data = styled.td({
  padding: "2px 4px",
  border: greyBorder,
});
