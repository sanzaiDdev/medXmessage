import React from "react";

import { QRCodeSVG } from "qrcode.react";
import { Box, Paper, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";

export const AssistanceCard = () => {
  return (
    <Box width={260}>
      <Paper elevation={4} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            paddingX: 3,
            paddingY: 2,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Typography
            sx={{ fontSize: 17, fontWeight: 700, fontFamily: "Quicksand" }}
          >
            Assistance Card
          </Typography>

          <Box
            sx={{
              background: "#fae6fc",
              borderRadius: 0.5,
              p: 0.75,
            }}
          >
            <Grid3x3Icon
              fontSize="medium"
              sx={{ color: "#d45bd2", transform: `skewX(-20deg)` }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: 3,
            paddingY: 3.5,
            borderBottom: 2,
            borderBottomStyle: "dashed",
            borderColor: "divider",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontFamily: "Quicksand",
              fontWeight: 600,
              marginBottom: 1,
            }}
          >
            NCM-1234567890
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 800,
              fontFamily: "Quicksand",
              letterSpacing: 1.5,
              marginBottom: 1,
            }}
          >
            John Doe
          </Typography>

          <Box display="flex" alignItems="center" marginBottom={1}>
            <PhoneIcon
              sx={{ fontSize: 16, marginRight: 1.5, color: "#d45bd2" }}
            />
            <Typography
              sx={{ fontSize: 14, fontFamily: "Quicksand", fontWeight: 600 }}
            >
              + 1234567890
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon
              sx={{ fontSize: 16, marginRight: 1.5, color: "#d45bd2" }}
            />
            <Typography
              sx={{ fontSize: 14, fontFamily: "Quicksand", fontWeight: 600 }}
            >
              asstistance@ncm.com
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={4} sx={{ borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" sx={{ paddingY: 6 }}>
          <QRCodeSVG value="https://reactjs.org/" />
        </Box>
      </Paper>
    </Box>
  );
};
