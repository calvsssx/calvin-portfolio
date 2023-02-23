'use client'
import * as React from 'react';
import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from './motion';
import Header from './header';

const ANIMATION_DURATION = 0.5;

const IntroSection = () => {
  const color = 'blue.400';

  return (
    <Container maxW="5xl" p={{ base: 5, md: 12 }}>
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor={color}
              src={'https://media.licdn.com/dms/image/D5603AQGcj7-Ollue_g/profile-displayphoto-shrink_400_400/0/1676799794430?e=1682553600&v=beta&t=3ytuXQUNqQWd0S22kJxPkahB5nUOILdaqPkGiiyzZwA'}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header underlineColor={color} mt={0} cursor="pointer" width="max-content">
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
              Calvin
            </Box>{' '}
            and I&apos;m a{' '}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer
            </Box>{' '}
            {/* <Box as="span" whiteSpace="nowrap">
              an open source lover&nbsp;
            </Box> */}
            from{' '}
            <Box as="span" whiteSpace="nowrap">
              the Philippines
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            Welcome to my portfolio, a digital representation of my experience and skills
          </Box>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default IntroSection;