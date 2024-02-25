import { Stepper as MTStepper, Step } from "@material-tailwind/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveStep } from "../../redux/features/stepper/stepperSlice";

type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: React.ReactNode;
  }[];
};

export function Stepper({ steps }: TStepperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const { title } = useAppSelector((state) => state.module);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-4 px-8">
      <MTStepper placeholder={""} activeStep={activeStep}>
        {steps.map(({ value, name }) => (
          <Step
            placeholder={""}
            key={value}
            className="w-fit px-4 cursor-pointer"
            onClick={() => title && dispatch(setActiveStep(value))}
          >
            {name}
          </Step>
        ))}
      </MTStepper>

      <div className="mt-16">{steps[activeStep].component}</div>
    </div>
  );
}
