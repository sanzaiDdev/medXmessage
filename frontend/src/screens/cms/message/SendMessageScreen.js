import React from "react";

import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SendIcon from "@mui/icons-material/Send";

import { useSendMessageMutation } from "../../../store/services/message";

const INITIAL_STATE = {
  subject: "",
  toReceipient: "",
  messageContent: "",
};

export const SendMessageScreen = () => {
  const navigate = useNavigate();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...INITIAL_STATE },
  });

  // // RTKQuery
  const [sendMessage, { isLoading: sendingMessage }] = useSendMessageMutation();

  const handleSendMessage = async (data) => {
    await sendMessage({ ...data })
      .unwrap()
      .then((res) => {
        if (res.status === 202) {
          navigate("/cms/messages");
          reset({ ...INITIAL_STATE });
        } else {
          toast.error(res.message, {});
        }
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={0} sx={{ marginBottom: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: "100%", paddingX: 2, paddingY: 1 }}
        >
          <Box title="Includes attachment"></Box>
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
              <Controller
                name="toReceipient"
                control={control}
                rules={{ required: "Receipient is required" }}
                render={({ field }) => (
                  <TextField
                    name="toReceipient"
                    // variant="standard"
                    size="small"
                    placeholder="Enter mail address"
                    fullWidth
                    type="email"
                    error={Boolean(errors?.toReceipient)}
                    helperText={errors?.toReceipient?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={4}>
            <Grid item md={2}>
              <Typography sx={{ color: "gray" }}>Subject</Typography>
            </Grid>
            <Grid item md={6}>
              <Controller
                name="subject"
                control={control}
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <TextField
                    name="subject"
                    // label="Message subject"
                    // size="small"
                    // variant="standard"
                    size="small"
                    placeholder="Enter subject"
                    fullWidth
                    error={Boolean(errors?.subject)}
                    helperText={errors?.subject?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
          <br />
          <Grid item md={12}>
            <Typography sx={{ color: "gray", marginBottom: 2 }}>
              Message
            </Typography>

            <Controller
              name="messageContent"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field: { onChange } }) => (
                <>
                  <Editor
                    apiKey="vfxq7kcd084xjuzjxu81tbqxeilyd9j2b2bo0ni486a0we8z"
                    placeholder="Your message here"
                    onEditorChange={onChange}
                    init={{
                      height: 200,
                      menubar: false,
                      plugins: [],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        'body { font-family:"Segoe UI","Montserrat",Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                  />
                  {errors.messageContent && (
                    <span style={{ color: "#d32f2f", fontSize: "12px" }}>
                      {errors.messageContent.message}
                    </span>
                  )}
                </>
              )}
            />
          </Grid>
          <br />
          <Box display="flex" justifyContent="flex-end">
            <LoadingButton
              onClick={handleSubmit((d) => handleSendMessage(d))}
              endIcon={<SendIcon />}
              loading={sendingMessage}
              loadingPosition="end"
              variant="contained"
            >
              Send
            </LoadingButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
