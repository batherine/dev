import { Work, Education, Skills } from "../utils/Resume";
import {
  useColorModeValue,
  Heading,
  Accordion,
  Spacer,
  Container,
  Image,
  Box,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import Section from "../components/sections/Section";
import WorkEntry from "../components/sections/WorkEntry";
import EducationEntry from "../components/sections/EducationEntry";
import SkillsEntry from "../components/sections/SkillsEntry";
import ExtNavLink from "../components/ui/NavLink";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const Resume = [
  {
    label: "Resume",
    url: "https://docs.google.com/document/d/1Ho5JZ_5smYewir-rNyRJEokqpbPK4uS2R9rlrwmjTCE/edit?usp=sharing",
    icon: "",
  },
];

const Home = () => {
  return (

    <VStack >
      <BackgroundImage />
      <Box height={"500px"} />
      <Container
        zIndex={1}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
        paddingTop={"30px"}
        boxShadow="dark-lg">

        <Flex justify={"space-between"} flexDirection={"row"}>
          <Container>
            <Heading as='h2' size='xl'>
              Catherine Dougherty
            </Heading>
            <Text fontSize={"xl"} textAlign={"left"} >Software Engineer</Text>
          </Container>
          <Spacer />
          <Box justifyContent={"left"}>
            <ExtNavLink
              url={"https://docs.google.com/document/d/1Ho5JZ_5smYewir-rNyRJEokqpbPK4uS2R9rlrwmjTCE/edit?usp=sharing"}
              icon={faExternalLinkSquareAlt}>
            </ExtNavLink>
          </Box>
        </Flex>

        <br />

        <Section delay={.05}>
          <Heading
            variant="section-title"
            textDecorationColor={useColorModeValue("yellow.400", "yellow.500")}>
            Work
          </Heading>

          <Accordion allowMultiple>
            {Work.map((job, i) =>
              <WorkEntry key={i} job={job}></WorkEntry>)}
          </Accordion>
        </Section>

        <br />

        <Section delay={.60}>
          <Heading
            variant="section-title"
            textDecorationColor={useColorModeValue("yellow.400", "yellow.500")}>
            Education
          </Heading>

          <Accordion allowMultiple>
            {Education.map((edu, i) =>
              <EducationEntry key={i} edu={edu}></EducationEntry>)}
          </Accordion>
        </Section>

        <br />

        <Section delay={.05}>
          <Heading
            variant="section-title"
            textDecorationColor={useColorModeValue("yellow.400", "yellow.500")}>
            Languages & Technologies
          </Heading>

          <Accordion index={0}>
            <SkillsEntry skills={Skills}></SkillsEntry>
          </Accordion>
        </Section>

      </Container>

    </VStack >
  )
};

const BackgroundImage = () => {
  return (

    <Image src={"/img/mtn.jpg"} rounded={"full"} position={"fixed"} zIndex={0} w={"60%"}></Image>)
}

export default Home;
