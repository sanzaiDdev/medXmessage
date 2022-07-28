import React from "react";
import { Box, Stack } from "@mui/material";

import { AssistanceCard } from "../components/AssistanceCard";

export const NotFoundScreen = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100vh", background: "lightblue" }}
    >
      <Stack direction="row" spacing={10}>
        <AssistanceCard />
      </Stack>
    </Box>
  );
};
