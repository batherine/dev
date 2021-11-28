import {
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  Heading,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Input, FormControl } from "@chakra-ui/react";
import Gallery from "react-grid-gallery";
import Section from "./Section";
import UpdateShelfButton from "../ui/UpdateShelfButton";
import AddUpdateBook from "../ui/AddUpdateBook";
import { BOOK_HEIGHT, BOOK_MARGIN } from "../ui/Defaults";

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
//<IconButton
//                icon={<AddIcon />}
//                height={BOOK_HEIGHT + 5}
//                padding={12}
//                margin={2}
//                shadow="lg"
//                //bg={useColorModeValue("yellow.400", "yellow.500")}
//                opacity="50%"
//                onClick={onOpen}
//                _hover={{
//                  bg: useColorModeValue("yellow.400", "yellow.500"),
//                  opacity: "100%",
//                  shadow: "xl",
//                }}
//              ></IconButton>

const BookNameInput = () => {
  return (
    <Box>
      <FormControl id="book-name" isRequired>
        <Input placeholder="Book name" />
      </FormControl>
    </Box>
  );
};

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
          <UpdateShelfButton />
        </Flex>
        <Box overflowX="auto">
          <Section>
            <Gallery
              images={tierList}
              enableLightbox={true}
              enableImageSelection={false}
              rowHeight={BOOK_HEIGHT}
              maxRows={2}
              margin={BOOK_MARGIN}
              // TODO - Images should have shadow
            />
            <Flex>
              <AddUpdateBook />
            </Flex>
          </Section>
        </Box>
      </VStack>
    </div>
  );
};

export default Tier;
