import {
    Box,
    UnorderedList,
    ListItem,
    useColorModeValue,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Spacer,
    Text,
    Stack
} from "@chakra-ui/react";


const WorkEntry = ({ job, children }) => {
    return (
        <Box
            boxShadow="sm"
            alignItems="left"
        >

            <AccordionItem
                _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                }}>
                <h2>
                    <Box>
                        <AccordionButton
                            _hover={{
                                bg: useColorModeValue("gray.200", "gray.700"),
                            }}>

                            <Stack>
                                <Text fontSize={"1xl"} textAlign={"left"} as={"b"}> {job.title} </Text>
                                <Text textAlign={"left"} as={"em"}> {job.employer} </Text>
                            </Stack>

                            <Spacer />

                            <Stack paddingRight={3}>
                                <Text as={"em"} align={"right"}> {job.dates} <br /> {job.location} </Text>
                            </Stack>

                            <AccordionIcon color={useColorModeValue("yellow.400", "yellow.500")} />

                        </AccordionButton>
                    </Box>

                </h2>

                <AccordionPanel pb={4} >
                    <UnorderedList paddingLeft={4} fontSize="sm">
                        {job.descriptions.map((description, i) => (
                            <ListItem>{description}</ListItem>
                        ))
                        }
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
        </Box>
    );
}

export default WorkEntry;