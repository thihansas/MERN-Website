import { Box, Button, Typography } from "@mui/material";
import React from "react";
import download from "../assets/img1.jpg";

const Header = () => {
  return (
    <Box id= 'home'
      sx={{
        marginTop: "6rem",
        padding: "1rem",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: "3rem",
          textAlign: "center",
          "@media(max-width: 442px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Welcome to my Website!
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5rem",
          textAlign: "center",
          "@media(max-width: 442px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Nice to meet you!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", width: "20rem", marginBottom: "1rem" }}>
          <Typography>
            Contact me from the button below. I will answer within 24 hours.{" "}
          </Typography>
          <Button
            sx={{
              backgroundColor: "#003eff",
              color: "white",
              transition: "transform 0.3s",
              marginTop: "1rem",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundImage: "linear-gradient(to bottom, #003eff, #006eff",
              },
            }}
          >
            {" "}
            Contact Us{" "}
          </Button>
        </Box>
        <Box>
          <img
            src={download}
            alt="pic"
            style={{ maxWidth: "100%", height: "auto", marginTop: "1rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
