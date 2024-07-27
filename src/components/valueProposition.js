import { Box, Typography } from "@mui/material";
import React from "react";

const ValueProposition = () => {
  return (
    <Box id = 'value' sx={{ marginTop: "6rem", textAlign: "center", marginBottom: "2rem" }}>
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
        Our value proposition{" "}
      </Typography>

      <Box
        sx={{
          marginTop: "2rem",
          backgroundColor: "#1A2239",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          High quality products
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", color: "#CCCCCC" }}>
          {" "}
          yshucgbdwousbdoywevofuvwuevfbhiqbwfyug13pifbuo13vfuyg13byfvouv38ifuhpiwhvgfv3uyehfurgvfug13pfebu3veufygc
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Fast and secure shipping
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", color: "#CCCCCC" }}>
          {" "}
          yshucgbdwousbdoywevofuvwuevfbhiqbwfyug13pifbuo13vfuyg13byfvouv38ifuhpiwhvgfv3uyehfurgvfug13pfebu3veufygc
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Exceptional customer service
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", color: "#CCCCCC" }}>
          {" "}
          yshucgbdwousbdoywevofuvwuevfbhiqbwfyug13pifbuo13vfuyg13byfvouv38ifuhpiwhvgfv3uyehfurgvfug13pfebu3veufygc
        </Typography>
      </Box>
    </Box>
  );
};

export default ValueProposition;
