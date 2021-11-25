import { SimpleGrid } from "@chakra-ui/react";
import Section from "../components/sections/Section";
import ProjectCard from "../components/sections/ProjectCard";
import { PageInProgress } from "../components/ui/Defaults";

//const projects = [
//  {
//    title: "A* Grid Traversal",
//    alt: "A* Grid Traversal",
//    img: "/img/projects/astar.png",
//    gif: "/img/projects/astar.gif",
//    url: "https://jameshiner.github.io/AStarSearch/",
//    sourceUrl:
//      "https://github.com/jameshiner/jameshiner.github.io/tree/master/AStarSearch",
//    description:
//      "A* Search pathfinding algorithm to find the shortest path between two corners of a grid.",
//  },
//];

const projects = [];

const renderProjects = () => {
  return projects.map((project, i) => {
    return <div key={i}>{ProjectCard(project)}</div>;
  });
};

const Projects = () => {
  if (projects.length === 0) {
    return <PageInProgress />;
  } else {
    return (
      <div>
        <Section delay={0.1}></Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {renderProjects()}
          </SimpleGrid>
        </Section>
      </div>
    );
  }
};

export default Projects;
