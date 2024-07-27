import { Box, Text, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { Fragment } from "react";
import NextLink from 'next/link';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Box width="960px" pt='36px'>
        <Text variant='p' fontSize='2xl' fontWeight='700'>Обряды</Text>
        <Box mt='20px'>
          <NextLink href="/hajj" passHref>
            <Link fontSize='lg' color='blue.500' mr='20px'>Совершить Хадж</Link>
          </NextLink>
          <NextLink href="/umra" passHref>
            <Link fontSize='lg' color='blue.500'>Совершить Умру</Link>
          </NextLink>
        </Box>
      </Box>
    </Fragment>
  );
};
export default Home;
