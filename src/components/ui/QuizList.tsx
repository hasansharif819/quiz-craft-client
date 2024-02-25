/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spinner, Typography } from "@material-tailwind/react";
import { useGetAllModuleQuery } from "../../redux/features/module/moduleApi";
import { Card } from "./Card";
import { QuizModal } from "./QuizModal";

const QuizList = () => {
  const { data: allModule, isLoading } = useGetAllModuleQuery("");
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Spinner color="blue" />
      </div>
    );
  }

  return (
    <div>
      {allModule?.data?.slice().reverse().map((module: any) => (
        <Card
          key={module._id}
          footer={
            <div className="flex justify-between items-end">
              <QuizModal moduleId={module._id} />
            </div>
          }
        >
          <div>
            <Typography
              placeholder={""}
              variant="h4"
              color="blue-gray"
              className="mb-2"
            >
              {module.title}
            </Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default QuizList;
