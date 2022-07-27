import React from "react";

import { Avatar, Box, Paper, Typography } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";

const getNameInitials = (name) =>
  name
    .split(" ")
    .map((char) => char[0].toUpperCase())
    .join(".");

export const MessageItem = ({
  from,
  subject,
  bodyPreview,
  receivedAt,
  hasAttachments,
}) => {
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
        noWrap
      >
        <Avatar size="small" sx={{ height: 36, width: 36 }}>
          <Typography variant="caption">
            {getNameInitials(from.name)}
          </Typography>
        </Avatar>
        <Box
          sx={{ flexShrink: 0, marginLeft: 2, width: 200 }}
          title={from.address}
        >
          <Typography noWrap>{from.name}</Typography>
          <Typography sx={{ color: "gray", fontSize: 13 }} noWrap>
            {from.address}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, marginX: 6 }} noWrap>
          <Typography sx={{ fontWeight: 400 }}>{subject}</Typography>
          <Typography sx={{ color: "gray", fontSize: 12 }}>
            {bodyPreview}
          </Typography>
        </Box>

        {hasAttachments && (
          <Box title="Includes attachment" sx={{ marginRight: 4 }}>
            <AttachmentIcon />
          </Box>
        )}

        <Typography
          sx={{
            flexShrink: 0,
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {new Date(receivedAt).toLocaleDateString()}
        </Typography>
      </Box>
    </Paper>
  );
};
