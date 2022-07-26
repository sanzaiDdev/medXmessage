import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, IconButton, Paper, Stack, Typography, Link } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import { getSocket } from "../../../utils/socket.io.service";
import { useGetMessagesQuery } from "../../../store/services/message";

import { MessageItem } from "../../../components/message/MessageItem";

export const MessageListScreen = () => {
  // RTKQuery
  const { data, isLoading, isFetching, refetch } = useGetMessagesQuery();

  const socket = getSocket();

  React.useEffect(() => {
    socket.on("MESSAGE_FETCHED", (message) => {
      alert(message);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={0} sx={{ marginBottom: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", paddingX: 2, paddingY: 1 }}
        >
          <Typography sx={{ fontWeight: 500 }}>Messages (Inbox)</Typography>
          <Box>
            {isFetching && (
              <Typography variant="caption">Fetching...</Typography>
            )}
            <IconButton
              color="primary"
              size="small"
              title="Refresh"
              onClick={() => refetch()}
            >
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      {data.messages.length ? (
        <Stack>
          {data.messages.map((message) => (
            <Link
              component={RouterLink}
              to={`/cms/messages/${message._id}`}
              key={message._id}
              sx={{ textDecoration: "none" }}
            >
              <MessageItem {...message} />
            </Link>
          ))}
        </Stack>
      ) : (
        <div>No messages</div>
      )}
    </Box>
  );
};
