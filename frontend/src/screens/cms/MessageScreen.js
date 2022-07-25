import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, IconButton, Paper, Stack, Typography, Link } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import { MessageItem } from "../../components/message/MessageItem";

export const MessageScreen = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={0} sx={{ marginBottom: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", padding: 2 }}
        >
          <Typography variant="subtitle">Messages (Inbox)</Typography>
          <IconButton color="primary" size="small" title="Refresh">
            <RefreshIcon />
          </IconButton>
        </Box>
      </Paper>

      <Stack>
        {new Array(5).fill(null).map((item) => (
          <Link
            component={RouterLink}
            to="/cms/dashboard"
            key={item}
            sx={{ textDecoration: "none" }}
          >
            <MessageItem />
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
