"use client"
import React from "react";
import {
  Heading,
  SlideFade,
  Grid,
  Text,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Container,
  chakra
} from "@chakra-ui/react";
import StackCard from "./TechStack";
import {
  mobileTechStacks,
  otherTechStacks,
  webTechStacks,
} from "../constant";

const TechStackSection = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 12 }}>
        <SlideFade in offsetY={80}>
        <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Tech Stack
      </chakra.h3>
      <Tabs variant="solid-rounded" mt={5}>
        <TabList>
          <Tab mx={2}>Web</Tab>
          {/* <Tab mx={2}>Mobile</Tab> */}
          <Tab mx={2}>Others</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {webTechStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel>
          {/* <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {mobileTechStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel> */}
          <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {otherTechStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SlideFade>
    </Container>
    
  );
};

export default TechStackSection;