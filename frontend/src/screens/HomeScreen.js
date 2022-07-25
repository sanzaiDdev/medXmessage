import React from "react";

import { Typography, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography component="h1" variant="h5">
            You've reached the home screen. Start developing!
          </Typography>
          <br />
          <div>Some screens to get around:</div>
          <br />
          <Stack spacing={4} direction="row">
            <Link to="/signin">Sign in Screen</Link>
            <Link to="/cms/dashboard">Dashboard</Link>
            <Link to="/cms/profile">Profile</Link>
            <Link to="/random">Not found</Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
