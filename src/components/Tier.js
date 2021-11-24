import {
  Container,
  Flex,
  useColorModeValue,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Gallery from "react-grid-gallery";
import Section from "../components/Section";

const Tier = ({ heading, tierList }) => {
  return (
    <div>
      <VStack
        w="100%"
        h="300"
        alignItems="left"
        rounded={"md"}
        bg={useColorModeValue("gray.100", "gray.900")}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.100", "gray.700"),
        }}
      >
        <Flex>
          <Heading as="h2" size="lg" textAlign="left" padding={5}>
            {heading}
          </Heading>
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
