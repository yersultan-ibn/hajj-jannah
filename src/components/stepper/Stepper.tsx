import React, { FC } from "react";
import { Stepper as UIStepper, VStack } from "@chakra-ui/react";
import { StepItem } from "./ui";

interface Props {
  activeStep: number;
  steps: Array<{ title: string; description: string }>;
}

export const Stepper: FC<Props> = ({ activeStep, steps }) => {
  return (
    <UIStepper index={activeStep} orientation="vertical" gap="0">
      <VStack spacing={4} align="stretch">
        {steps.map((step, index) => (
          <StepItem
            key={index}
            index={index}
            step={step}
            activeStep={activeStep}
          />
        ))}
      </VStack>
    </UIStepper>
  );
};
