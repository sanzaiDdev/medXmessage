import React from "react";

import { Avatar, Box, Paper, Typography } from "@mui/material";

export const MessageItem = () => {
  return (
    <Paper elevation={0} className="message-item">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
          padding: 2,
          fontSize: 12,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Avatar size="small" sx={{ height: 36, width: 36 }}>
          <Typography variant="subtitle1">M.S</Typography>
        </Avatar>
        <Typography sx={{ flexShrink: 0, width: 160, marginLeft: 2 }} noWrap>
          Michael G. Scott
        </Typography>
        <Typography sx={{ flexGrow: 1, color: "gray" }} noWrap>
          Hi Sanjay, Michael here, Co-Founder and CEO at GraphCMS. I was
          thrilled to see you sign up a week ago! Hi Sanjay, Michael here,
          Co-Founder and CEO at GraphCMS. I was thrilled to see you sign up a
          week ago!
        </Typography>
        <Typography
          sx={{
            flexShrink: 0,
            fontSize: 12,
            fontWeight: 500,
            marginLeft: 5,
          }}
        >
          Jun 22
        </Typography>
      </Box>
    </Paper>
  );
};
