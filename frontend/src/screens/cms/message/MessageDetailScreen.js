import React from "react";
import { useParams } from "react-router-dom";

import { Box, Grid, Paper, Typography } from "@mui/material";

export const MessageDetailScreen = () => {
  const { id } = useParams();

  return (
    <div>
      Message: {id}
      <Paper elevation={0}>
        <Box sx={{ p: 3 }}>
          <Grid container>
            <Grid container spacing={6}>
              <Grid item>From</Grid>
              <Grid item>Michael G. Scott</Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item>From</Grid>
              <Grid item>Michael G. Scott</Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};
