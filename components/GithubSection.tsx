/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import { Heading, SlideFade, Box, SimpleGrid, Text, Container, chakra } from "@chakra-ui/react";
import GithubCard from "./GithubCard";
import { GitRepo } from "./types/gitRepo";

interface IGithubSection {
  repos: GitRepo[];
}

const GithubSection: React.FC<IGithubSection> = ({ repos }) => {
  if (!repos) return <></>;
  return (
    <Container maxW="5xl" p={{ base: 5, md: 12 }}>
      <SlideFade in offsetY={80} delay={0.2}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Github Repos
      </chakra.h3>
      <Box my={5}>
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          {repos.map((repo) => (
            <GithubCard gitRepo={repo} key={repo.name} />
          ))}
        </SimpleGrid>
      </Box>
    </SlideFade>
    </Container>
    
  );
};

export default GithubSection;