import "./App.css";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import ValueProposition from "./components/valueProposition";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const theme = createTheme({
  Typography: {
    fontFamily: "Poppins",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <ValueProposition />
        <Product />
        <AboutUs />
        <ContactForm />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
