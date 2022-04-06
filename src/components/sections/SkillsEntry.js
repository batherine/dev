import {
    Box,
    Flex,
    Wrap,
    WrapItem,
    Tag,
    useColorModeValue,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/react";


const SkillsEntry = ({ skills }) => {
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
                        </AccordionButton>
                    </Box>

                </h2>

                <AccordionPanel pb={4} spacing={2}>
                    <Wrap spacing={2} justify="flex-start" wrap={true}>
                        {
                            (skills.map((skill) => (
                                <WrapItem>
                                    <Flex>
                                        <Tag size={"md"} variant={"solid"} colorScheme={skill.color}>
                                            {skill.value}
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

export default SkillsEntry;