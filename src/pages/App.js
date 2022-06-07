import { Box, Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlurryGallery from "./BlurryGallery";
import BookClub from "./BookClub";
import Home from "./Home";
import NotFound from "./NotFound";
import Projects from "./Projects";
import NavigationBar from "../components/sections/NavigationBar";
import Footer from "../components/sections/Footer";
import EditShelfButton from "../components/ui/EditShelfButton";

const App = ({ children, router }) => {
  return (
    <Box>
      <BrowserRouter>
        <NavigationBar />
        <Container maxW="container.lg" pt={"100px"}>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            {/* <Route path="/bookclub" element={<BookClub />}></Route>  */}
            {/* <Route path="/galleriaDeBlur" element={<BlurryGallery />}></Route> */}
            <Route path="/Test" element={<EditShelfButton />}></Route>
            <Route component={<NotFound />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
