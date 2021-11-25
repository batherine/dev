import {
  Container,
  Flex,
  Spacer,
  useColorModeValue,
  Heading,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Gallery from "react-grid-gallery";
import Section from "./Section";
import EditShelfButton from "../ui/EditShelfButton";

//TODO Book should have title shown  when hovered over
//render () {
//  var images =
//          this.state.images.map((i) => {
//              i.customOverlay = (
//                      <div style={captionStyle}>
//                      <div>{i.caption}</div>
//                      {i.hasOwnProperty('tags') &&
//                       this.setCustomTags(i)}
//                  </div>);
//              return i;
//          });

//TODO Add edit icon to bring up modal window
//TODO ONly let edit icon be visible on hover

const Tier = ({ heading, tierList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <VStack
        boxShadow="dark-lg"
        w="100%"
        h="300"
        alignItems="left"
        rounded={"md"}
        bg={useColorModeValue("gray.100", "gray.800")}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        <Flex justifyContent="space-between" margin="2">
          <Heading size="md" textAlign="left" padding={3}>
            {heading}
          </Heading>
          <Spacer />
          <EditShelfButton />
        </Flex>
        <Container>
          <Section>
            <Gallery
              images={tierList}
              enableLightbox={true}
              enableImageSelection={false}
              rowHeight={175}
              margin={10}
              // TODO - Images should have shadow
            />
          </Section>
        </Container>
      </VStack>
    </div>
  );
};

export default Tier;
