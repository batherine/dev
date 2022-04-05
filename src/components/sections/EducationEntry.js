import {
    Box,
    Flex,
    Wrap,
    WrapItem,
    Tag,
    useColorModeValue,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Spacer,
    Text,
    Stack
} from "@chakra-ui/react";


const EducationEntry = ({ edu }) => {
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
                                <Text fontSize={"1xl"} textAlign={"left"} as={"b"}> {edu.degree} </Text>
                                <Text textAlign={"left"} as={"em"}> {edu.school} </Text>
                            </Stack>

                            <Spacer />

                            <Stack paddingRight={3}>
                                <Text as={"em"} align={"right"}> {edu.date} <br /> {edu.location} </Text>
                            </Stack>

                            <AccordionIcon color={useColorModeValue("yellow.400", "yellow.500")} />

                        </AccordionButton>
                    </Box>

                </h2>

                <AccordionPanel pb={4} spacing={2}>
                    <Text as={"em"} pb={4}> {edu.description} </Text>
                    <p><br></br></p>
                    <Wrap spacing={2} justify="flex-start" wrap={true}>
                        {
                            (edu.coursework.map((course) => (
                                <WrapItem>
                                    <Flex>
                                        <Tag size={"md"} variant={"solid"} bg={"yellow.500"}>
                                            {course}
                                        </Tag>
                                    </Flex>
                                </WrapItem>
                            )))}
                    </Wrap>
                </AccordionPanel>
            </AccordionItem>
        </Box >
    );
}

export default EducationEntry;