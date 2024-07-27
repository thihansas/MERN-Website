import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

function ContactForm() {
  return (
    <Container id='contact'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
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
        Contact us
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          maxWidth: "30rem",
          width: "100%",
        }}
      >
        <TextField
          label="name"
          name="Name"
          fullWidth
          required
          sx={{ marginBottom: "1rem" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
        />

        <TextField
          label="E-mail"
          name="E-mail"
          fullWidth
          required
          sx={{ marginBottom: "1rem" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
        />

        <TextField
          label="Write a message..."
          name="Message"
          fullWidth
          required
          rows={4}
          multiline
          sx={{ marginBottom: "1rem" }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
        />

        <Button
          sx={{
            background: "blue",
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
          Submit{" "}
        </Button>
      </Box>
    </Container>
  );
}

export default ContactForm;
