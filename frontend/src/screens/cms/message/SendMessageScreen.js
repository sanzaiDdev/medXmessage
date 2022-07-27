import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SendIcon from "@mui/icons-material/Send";

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
        <Box sx={{ p: 3 }}>
          <Grid container spacing={4}>
            <Grid item md={2}>
              <Typography sx={{ color: "gray" }}>To</Typography>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  name="email"
                  placeholder="Enter email address"
                  size="small"
                  variant="standard"
                />
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={4}>
            <Grid item md={2}>
              <Typography sx={{ color: "gray" }}>Subject</Typography>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <TextField
                  name="subject"
                  placeholder="Enter subject"
                  size="small"
                  variant="standard"
                />
              </FormControl>
            </Grid>
          </Grid>
          <br />
          <Grid item md={12}>
            <Typography sx={{ color: "gray" }}>Message</Typography>
            <Box
              sx={{
                p: 3,
                marginTop: 1,
                borderRadius: 2,
                backgroundColor: "#fafafa",
              }}
            ></Box>
          </Grid>
          <br />
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
