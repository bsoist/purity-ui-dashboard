// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import imageArchitect1 from "assets/img/mansion.jpg";
import imageArchitect2 from "assets/img/condo.jpg";
import imageArchitect3 from "assets/img/italy.jpg";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = ({ title, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' my='24px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          <Text fontSize='sm' color='gray.500' fontWeight='400'>
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap='24px'>
          <ProjectCard
            image={imageArchitect1}
            name={"$Mansion"}
            category={"Ocenfront Mansion"}
            description={
              "This beautiful home has a 20,000 gallon aquarium and 200 feet of private beachfront."
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <ProjectCard
            image={imageArchitect2}
            name={"$Condo"}
            category={"Chicago Condo"}
            description={
              "An upscale condo with great access to the city's best amenities."
            }
            avatars={[avatar4, avatar2, avatar6, avatar4]}
          />
          <ProjectCard
            image={imageArchitect3}
            name={"$Festa"}
            category={"Festa Italiana"}
            description={
              "Different people have different taste, but everyone loves a good Italian meal."
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <Button
            p='0px'
            bg='transparent'
            color='gray.500'
            border='1px solid lightgray'
            borderRadius='15px'
            minHeight={{ sm: "200px", md: "100%" }}>
            <Flex direction='column' justifyContent='center' align='center'>
              <Icon as={FaPlus} fontSize='lg' mb='12px' />
              <Text fontSize='lg' fontWeight='bold'>
                Create a New Asset
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Projects;
