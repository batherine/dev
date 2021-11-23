import { Box, Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlurryGallery from "../pages/BlurryGallery";
import BookClub from "../pages/BookClub";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const App = ({ children, router }) => {
  return (
    <Box>
      <BrowserRouter>
        <NavigationBar />
        <Container maxW="container.lg" pt={"100px"}>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/bookclub" element={<BookClub />}></Route>
            <Route path="/galleriaDeBlur" element={<BlurryGallery />}></Route>
            <Route component={<NotFound />}></Route>
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
