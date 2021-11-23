import { photos } from "../components/photos";
import Gallery from "react-grid-gallery";

const BlurryGallery = () => {
  return (
    <Gallery
      images={photos}
      enableLightbox={true}
      enableImageSelection={false}
      rowHeight={300}
      margin={4}
    />
  );
};
export default BlurryGallery;
