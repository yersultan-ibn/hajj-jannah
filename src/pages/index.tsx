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
      <Box width="100%">
        <Flex
          borderRadius="md"
          overflow="hidden"
          justifyContent="center"
          width={"100%"}
        >
          <Box
            flex="1"
            bgImage="url('https://cdn.jawar.sa/nusuk/wwwroot/img/journey/02.png')"
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
            h='100vh'
            w='100%'
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
                w='100%'
                color="white"
                py='50px'
                fontSize={50}
                textShadow="4px 4px 4px #070707"
              >
                Hajj
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
                w='100%'
                color="white"
                py='50px'
                textShadow="4px 4px 4px #070707"
                fontSize={50}
              >
                Umrah
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
