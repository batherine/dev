import { Center, VStack, Text } from "@chakra-ui/layout";

export const BOOK_HEIGHT = 175;
export const BOOK_MARGIN = 10;
export const PageInProgress = () => {
  return (
    <VStack>
      <Center>
        <Text fontSize="8xl" padding={5}>
          ):
        </Text>
      </Center>
      <Center>
        <Text fontSize="4xl" padding={5} textAlign="center">
          Sorry! Page in progress
        </Text>
      </Center>
    </VStack>
  );
};
