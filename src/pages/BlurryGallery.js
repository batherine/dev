import { photos } from "../components/photos";
import Gallery from "react-grid-gallery";
import Section from "../components/Section";
import { Box } from "@chakra-ui/react";

const BlurryGallery = () => {
  return (
    <Box>
      <Section delay={0.2}>
        <Gallery
          images={photos}
          enableLightbox={true}
          enableImageSelection={false}
          rowHeight={300}
          margin={4}
        />
      </Section>
    </Box>
  );
};
export default BlurryGallery;
