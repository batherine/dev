import { Work, Education } from "../utils/Resume";
import {
  useColorModeValue,
  Heading,
  Accordion,
  Spacer,
  Container
} from "@chakra-ui/react";
import Section from "../components/sections/Section";
import WorkEntry from "../components/sections/WorkEntry";
import EducationEntry from "../components/sections/EducationEntry";

const Home = () => {
  //return <PageInProgress />;
  return (
    <Container padding={4} width="55%">
      <Heading as='h2' size='xl'>
        Catherine Dougherty
      </Heading>

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

      <Spacer />

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
    </Container >
  )
};

export default Home;
