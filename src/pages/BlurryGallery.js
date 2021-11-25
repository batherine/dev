import { photos } from "../utils/Photos";
import Gallery from "react-grid-gallery";
import Section from "../components/sections/Section";
import { PageInProgress } from "../components/ui/Defaults";
import { Box } from "@chakra-ui/react";

const BlurryGallery = () => {
  if (photos.length === 0) {
    return <PageInProgress />;
  } else {
    return (
      <Box>
        <Section delay={0.4}>
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
  }
};

export default BlurryGallery;
