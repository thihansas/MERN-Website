import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Footer>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          lineHeight: "3rem",
          backgroundColor: "#333",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          My Company
        </Typography>
        <Typography>
          &copy:{new Date().getFullYear()} Your company name. All rights
          reserved.
        </Typography>
        <Typography>121, Main road, City, Country.</Typography>
        <Typography>0703463464</Typography>
        <Typography> thihansaaa@gmail.com</Typography>

        <Box sx={{ marginTop: "1rem" }}>
          {/* <a
            href="https://www.instagram.com/"
            target="blank"
            rel="noopener noreferrer"
          > */}
          <InstagramIcon
            sx={{
              marginRight: "10px",
              color: "white",
              transition: "color 0.3 ease",
              "&:hover": { color: "rgb(0,0,255)" },
            }}
          />
          {/* </a> */}
          {/* <a
            href="https://www.facebook.com/"
            target="blank"
            rel="noopener noreferrer"
          > */}
          <FacebookIcon
            sx={{
              marginRight: "10px",
              color: "white",
              transition: "color 0.3 ease",
              "&:hover": { color: "rgb(0,0,255)" },
            }}
          />
          {/* </a> */}
          {/* <a
            href="https://x.com/?lang=en"
            target="blank"
            rel="noopener noreferrer"
          > */}
          <TwitterIcon
            sx={{
              marginRight: "10px",
              color: "white",
              transition: "color 0.3 ease",
              "&:hover": { color: "rgb(0,0,255)" },
            }}
          />
          {/* </a> */}
        </Box>
        <Typography sx={{ fontStyle: "italic" }}>
          {" "}
          Powered by 'Your company'{" "}
        </Typography>
      </Box>
    </Footer>
  );
}

export default Footer;
