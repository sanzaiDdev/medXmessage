import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import {
  useGetMessageDetailQuery,
  useLazyGetMessageAttachmentQuery,
} from "../../../store/services/message";

export const MessageDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // RTKQuery
  const { data, error, isLoading } = useGetMessageDetailQuery(id);
  const [messageAttachment] = useLazyGetMessageAttachmentQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Ops! Something went wrong</div>;

  return (
    <>
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
          <Typography sx={{ fontWeight: 500 }}>Messages Detail</Typography>
        </Box>
      </Paper>

      <Paper elevation={0}>
        <Box sx={{ p: 3 }}>
          <Grid container rowSpacing={2}>
            <Grid item md={2}>
              <Typography sx={{ color: "gray" }}>From</Typography>
            </Grid>
            <Grid item md={9}>
              <span>{data.message?.from.name ?? "--"} </span>
              <span style={{ color: "gray" }}>
                {`(${data.message?.from.address})` ?? "--"}
              </span>
            </Grid>

            <Grid item md={2}>
              <Typography sx={{ color: "gray" }}>To</Typography>
            </Grid>
            <Grid item md={9}>
              {data.message?.toReceipients.map((r) => (
                <Typography
                  sx={{ marginRight: 2, textDecoration: "underline" }}
                >
                  {r.address}
                </Typography>
              )) ?? "--"}
            </Grid>

            <Grid item md={2}>
              <Typography sx={{ color: "gray" }}>Subject</Typography>
            </Grid>
            <Grid item md={9}>
              {data.message?.subject ?? "--"}
            </Grid>

            <Grid item md={12}>
              <Typography sx={{ color: "gray" }}>Message</Typography>
              <Box
                sx={{
                  p: 3,
                  marginTop: 1,
                  borderRadius: 2,
                  backgroundColor: "#fafafa",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.message.richBodyText,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <br />
          <Typography>{`Attachements (${data.message.attachments.length})`}</Typography>
          <Box
            sx={{
              width: "100%",
              padding: 2,
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            {data?.message?.attachments.map((attachment) => (
              <Button
                sx={{ textDecoration: "none" }}
                onClick={() =>
                  messageAttachment({
                    attachmentId: attachment.attachmentId,
                    messageId: attachment.messageId,
                  })
                }
              >
                {attachment.name}
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>
    </>
  );
};
