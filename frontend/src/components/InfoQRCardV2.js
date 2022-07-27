import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { Box, Paper, Typography } from "@mui/material";

export const InfoQRCardV2 = () => {
  return (
    <Paper elevation={0}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{ p: 5, width: 200, textAlign: "center" }}
      >
        <Box sx={{ mb: 4 }}>
          <QRCodeSVG value="https://reactjs.org/" size={200} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: 26, fontWeight: 500 }}>
            Max Musterman
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
            Erfolgsweg 37
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
            01234 Musterstadt
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
            Tel: 021345678
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
            email@template.com
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
            www.nepalcanmove.com
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
