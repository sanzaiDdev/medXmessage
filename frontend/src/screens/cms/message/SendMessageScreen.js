import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const SendMessageScreen = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={0} sx={{ marginBottom: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          // justifyContent="space-between"
          sx={{ width: "100%", paddingX: 2, paddingY: 1 }}
        >
          <IconButton
            color="primary"
            size="small"
            title="Refresh"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography sx={{ fontWeight: 500 }}>Send Message</Typography>
        </Box>
      </Paper>

      <Paper elevation={0}>
        <Box display="flex" alignItems="center" sx={{ p: 3 }}>
          <Typography>To</Typography>
          <TextField
            placeholder="Enter email address"
            size="small"
            variant="standard"
          />
        </Box>
      </Paper>
    </Box>
  );
};
