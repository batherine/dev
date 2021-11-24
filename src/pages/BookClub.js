//import { onValue, ref } from "firebase/database";
//mport Tier from "../components/Section";
import { Grid, Box, Heading, Center } from "@chakra-ui/react";
import { currentBooks } from "../components/Books";
import Tier from "../components/Tier";

//import db from "../Controller/Database";
const BookClub = () => {
  //const [response, setResponse] = useState({});
  //   console.log(newDatabase() === true);
  //const hippoRef = ref(db, "users/hippo");
  //onValue(hippoRef, (snapshot) => {
  // console.log("asd");
  //  setResponse(snapshot.val());
  //});
  return (
    <Box>
      <Center>
        <Heading as="h3" size="lg" padding={6}>
          My Shelves
        </Heading>
      </Center>
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <Tier heading="Currently Reading" tierList={currentBooks}></Tier>
        <Tier heading="Read" tierList={currentBooks}></Tier>
        <Tier heading="Want To Read" tierList={currentBooks}></Tier>
      </Grid>
    </Box>
  );
};

export default BookClub;
