import React, { FC } from "react";
import { Box, Flex, Circle, Text } from "@chakra-ui/react";
import { CheckMarkIcon } from "src/components/stepper/icons";

interface Props {
  index: number;
  step: { title: string; description: string };
  activeStep: number;
}

export const StepItem: FC<Props> = ({ index, step, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;

  return (
    <Flex align="center">
      <Circle
        size="40px"
        bg={isCompleted ? 'blue.main' : 'transparent'}
        color={isCompleted ? 'white' : 'black'}
        border="2px solid"
        borderColor={isActive || isCompleted ? 'blue.main' : 'grey.light'}
        fontWeight="bold"
        mr="4"
      >
        {index + 1}
      </Circle>
      <Box flex="1" pl="4">
        <Text fontWeight="400" fontSize="sm" color="grey.primary">{step.title}</Text>
        <Text fontWeight="bold" fontSize="md">{step.description}</Text>
      </Box>
      {isCompleted && <CheckMarkIcon />}
    </Flex>
  );
};
