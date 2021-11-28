import {
  Button,
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Spacer,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BOOK_HEIGHT } from "../ui/Defaults";

//   <Button onClick={onOpen} >Open Modal</Button> */
//
//      <FormControl isInvalid={form.errors.name && form.touched.name}>
//<FormLabel htmlFor="name">First name</FormLabel>
//<Input {...field} id="name" placeholder="name" />
//<FormErrorMessage>{form.errors.name}</FormErrorMessage>
//</FormControl>

const BookNameInput = () => {
  return (
    <Box padding={3}>
      <FormControl id="book-name" isRequired>
        <Input placeholder="Book name" />
      </FormControl>
    </Box>
  );
};

const BookISBNInput = () => {
  return (
    <Box padding={3}>
      <FormControl id="book-ISBN" isRequired>
        <Input placeholder="ISBN #" />
      </FormControl>
    </Box>
  );
};

//function validateName(value) {
// let error;
// if (!value) {
//   error = "Name is required";
// } else if (value.toLowerCase() !== "naruto") {
//   error = "Jeez! You're not a fan 😱";
// }
// return error;
//}

const AddUpdateBook = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        icon={<AddIcon />}
        height={BOOK_HEIGHT + 5}
        padding={12}
        margin={2}
        shadow="lg"
        opacity="50%"
        _hover={{
          bg: useColorModeValue("yellow.400", "yellow.500"),
          opacity: "100%",
          shadow: "xl",
        }}
        onClick={onOpen}
      ></IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookNameInput />
            <BookISBNInput />
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              bg={useColorModeValue("gray.100", "gray.600")}
              onClick={onClose}
              _hover={{
                shadow: "xl",
                bg: useColorModeValue("gray.200", "gray.500"),
              }}
            >
              Close
            </Button>
            <Spacer />
            <Button
              variant="ghost"
              bg={useColorModeValue("yellow.400", "yellow.500")}
              opacity="90%"
              _hover={{
                bg: useColorModeValue("yellow.400", "yellow.500"),
                opacity: "100%",
                shadow: "xl",
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default AddUpdateBook;
