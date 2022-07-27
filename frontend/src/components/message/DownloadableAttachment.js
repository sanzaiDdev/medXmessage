import React from "react";
import download from "downloadjs";

import LoadingButton from "@mui/lab/LoadingButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import { useLazyGetMessageAttachmentQuery } from "../../store/services/message";

export const DownloadableAttachment = ({ attachment }) => {
  const [fetchMessageAttachment, { isLoading: downloadingAttachment }] =
    useLazyGetMessageAttachmentQuery();

  const handleAttachmentDownload = async ({
    messageId,
    attachmentId,
    type,
    name,
  }) => {
    fetchMessageAttachment({ messageId, attachmentId })
      .unwrap()
      .then((res) => {
        download(
          `data:application/${type.slice("/")[0]};base64,` +
            res.rawData.contentBytes,
          `${name}`,
          type
        );
      });
  };

  return (
    <LoadingButton
      sx={{ textDecoration: "none", marginRight: 2 }}
      variant="outlined"
      title={`Download ${attachment.name}`}
      loading={downloadingAttachment}
      startIcon={<FileDownloadIcon />}
      onClick={() => handleAttachmentDownload(attachment)}
    >
      {attachment.name}
    </LoadingButton>
  );
};
