//import { onValue, ref } from "firebase/database";
import { IconButton, Grid, Box, useColorModeValue } from "@chakra-ui/react";
import { currentBooks } from "../utils/Books";
import Tier from "../components/sections/Tier";
import { AddIcon } from "@chakra-ui/icons";

//import db from "../database/Database";
//<Center>
//        <Heading as="h3" size="lg" padding={6}>
//          My Shelves
//        </Heading>
//      </Center>

const AddShelfButton = () => {
  return (
    <IconButton
      icon={<AddIcon />}
      shadow="2xl"
      bg={useColorModeValue("yellow.400", "yellow.500")}
      opacity="90%"
      _hover={{
        bg: useColorModeValue("yellow.400", "yellow.500"),
        opacity: "100%",
        shadow: "dark-lg",
      }}
    ></IconButton>
  );
};

const BookClub = () => {
  //const [response, setResponse] = useState({});
  //   console.log(newDatabase() === true);
  // const hippoRef = ref(db, "users/hippo");
  // onValue(hippoRef, (snapshot) => {
  //   console.log("asd");
  //setResponse(snapshot.val());
  //});

  return (
    <Box paddingTop={7}>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Tier heading="Currently Reading" tierList={currentBooks}></Tier>
        <Tier heading="Read" tierList={currentBooks}></Tier>
        <Tier heading="Want To Read" tierList={currentBooks}></Tier>
        <AddShelfButton />
      </Grid>
    </Box>
  );
};

export default BookClub;
