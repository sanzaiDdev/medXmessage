import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { Box, Paper, Typography } from "@mui/material";

export const InfoQRCard = () => {
  return (
    <Box width={280}>
      <Paper elevation={0} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: 3, borderBottom: 1, borderColor: "divider" }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            Ampol discount
          </Typography>
          <Box sx={{ background: "lightgray", width: 50, height: 50 }} />
        </Box>
        <Box
          sx={{
            padding: 3,
            borderBottom: 1,
            borderBottomStyle: "dashed",
            borderColor: "divider",
          }}
        >
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            My bonus offer
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Save 12c/L
          </Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            On your next fuel purchase at Ampol. T&C's apply. Expires 6 August
            2022
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={0} sx={{ borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" sx={{ paddingY: 6 }}>
          <QRCodeSVG value="https://reactjs.org/" />
        </Box>
      </Paper>
    </Box>
  );
};
