import React from "react";
import { Box, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "10px",
          "@media(max-width:442px)": {
            fontSize: "2rem",
          },
        }}
      >
        About us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
          gap: "1rem",
          marginBottom: "2rem",
          backgroundColor: "darkblue",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Box sx={{ width: "15rem", borderRadius: "10px", padding: "1.5rem" }}>
          <Typography>Section 1 title</Typography>
          <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            shifglwausdhfouahdsiughiw dashfgoiwdhfiuhawiudfhi auwhsdgsdgs
            dvsdvsd
          </Typography>
        </Box>

        <Box sx={{ width: "15rem", borderRadius: "10px", padding: "1.5rem" }}>
          <Typography>Section 2 title</Typography>
          <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            shifglwausdhfouahdsiughiwdhi dashfgoiwdhfiuhawiudfhiauwhs
          </Typography>
        </Box>

        <Box sx={{ width: "15rem", borderRadius: "10px", padding: "1.5rem" }}>
          <Typography>Section 3 title</Typography>
          <Typography sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            shifglwausdhfouahdsiughiw dashfgoiwdhfiuhawiudfhiau
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
