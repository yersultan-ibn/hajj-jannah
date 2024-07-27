import { Box, Flex, Button, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { Fragment } from "react";
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Fragment>
      <Box width="960px" pt='36px'>
        <Flex
          borderRadius="md"
          overflow="hidden"
          justifyContent="center"
        >
          <Box
            flex="1"
            bgImage="url('https://cdn.jawar.sa/nusuk/wwwroot/img/journey/02.png')"
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
            h='100vh'
            w='100%'
            mr='20px'
          >
            <Button
              onClick={() => handleNavigation('/hajj')}
              width="100%"
              height="100%"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _focus={{ boxShadow: "none" }}
              _active={{ bg: "rgba(255, 255, 255, 0.8)" }}
              borderRadius="none"
              padding='0'
            >
              <Text
                bg="rgb(25 25 25 / 54%)"
                w='100%'
                color="white"
                py='50px'
              >
                Совершить Хадж
              </Text>
            </Button>
          </Box>
          <Box
            flex="1"
            bgImage="url('https://cdn.jawar.sa/nusuk/wwwroot/img/journey/12.png')"
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
            h='100vh'
            w='100%'
          >
            <Button
              onClick={() => handleNavigation('/umra')}
              width="100%"
              height="100%"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _focus={{ boxShadow: "none" }}
              _active={{ bg: "rgba(255, 255, 255, 0.8)" }}
              borderRadius="none"
              padding='0'
            >
              <Text
                bg="rgb(25 25 25 / 54%)"
                w='100%'
                color="white"
                py='50px'
              >
                Совершить Умру
              </Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Home;
//
