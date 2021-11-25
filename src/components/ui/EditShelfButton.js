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
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//   <Button onClick={onOpen} >Open Modal</Button> */
//
//      <FormControl isInvalid={form.errors.name && form.touched.name}>
//<FormLabel htmlFor="name">First name</FormLabel>
//<Input {...field} id="name" placeholder="name" />
//<FormErrorMessage>{form.errors.name}</FormErrorMessage>
//</FormControl>

const ShelfNameInput = () => {
  return (
    <Box>
      <FormControl id="shelf-name" isRequired>
        <Input placeholder="Shelf name" />
      </FormControl>
    </Box>
  );
};

function validateName(value) {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value.toLowerCase() !== "naruto") {
    error = "Jeez! You're not a fan 😱";
  }
  return error;
}

const EditShelfButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        icon={<FontAwesomeIcon icon={faPen} size="md" />}
        bg="inherit"
        _hover="inherit"
        onClick={onOpen}
      ></IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Shelf</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ShelfNameInput />
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
export default EditShelfButton;
