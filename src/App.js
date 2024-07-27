import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product";
import ValueProposition from "./components/valueProposition";

const theme = createTheme({
  Typography: {
    fontFamily: "Poppins",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar/>
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
