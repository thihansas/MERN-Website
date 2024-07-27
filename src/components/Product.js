import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import img2 from "../assets/img2.jpg";

function Product() {
  return (
    <Container>
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
        Our Services
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
        }}
      >
        <Box
          sx={{
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src={img2}
            alt="product"
            style={{ width: "15rem", height: "auto", boderRadius: "2rem" }}
          ></img>

          <Typography sx={{ width: "15rem" }}> First Product </Typography>
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
            Get{" "}
          </Button>
        </Box>

        <Box
          sx={{
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src={img2}
            alt="product"
            style={{ width: "15rem", height: "auto", boderRadius: "2rem" }}
          ></img>

          <Typography sx={{ width: "15rem" }}> Second Product </Typography>
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
            Get{" "}
          </Button>
        </Box>

        <Box
          sx={{
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src={img2}
            alt="product"
            style={{ width: "15rem", height: "auto", boderRadius: "2rem" }}
          ></img>

          <Typography sx={{ width: "15rem" }}> Third Product </Typography>
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
            Get{" "}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Product;
