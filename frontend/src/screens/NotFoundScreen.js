import React from "react";
import { Box, Stack } from "@mui/material";

import { InfoQRCard } from "../components/InfoQRCard";
import { InfoQRCardV2 } from "../components/InfoQRCardV2";

export const NotFoundScreen = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100vh", background: "lightblue" }}
    >
      <Stack direction="row" spacing={10}>
        <InfoQRCard />
        <InfoQRCardV2 />
      </Stack>
    </Box>
  );
};
