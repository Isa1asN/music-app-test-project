import React from "react";
import { Box, Text } from "rebass";
import { css } from "@emotion/react";
import MusicCardList from "./MusicCardList";

const customStyle = css`
  padding: 20px;
  width: 100%;
`;

function MyComponent() {
  return (
    <Box css={customStyle}>
      <MusicCardList />
    </Box>
  );
}

export default MyComponent;
