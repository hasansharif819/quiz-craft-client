import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addQuizToList,
  clearQuizData,
  clearQuizList,
  setQuizOptions,
  setQuizQuestion,
} from "../../redux/features/quiz/quizSlice";
import { useAddQuizMutation } from "../../redux/features/quiz/quizApi";
import toast from "react-hot-toast";

export function AddQuizForm() {
  const [addQuiz] = useAddQuizMutation();
  const { title: moduleTitle, moduleId } = useAppSelector(
    (state) => state.module
  );

  const dispatch = useAppDispatch();
  const { quizQuestion, quizOptions, quizList } = useAppSelector(
    (state) => state.quiz
  );

  // Use RTK Query mutation hook
  //   const addQuizMutation = useAddQuizMutation();

  const handleAddQuiz = async () => {
    dispatch(addQuizToList(moduleId));
    dispatch(clearQuizData());
  };

  const handleSubmit = async () => {
    // await addQuizMutation()
    await addQuiz(quizList);
    dispatch(clearQuizList());
    toast.success("Quiz Added Successfully");
  };
  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        {moduleTitle}
      </Typography>
      <Typography placeholder={""} color="gray" className="mt-1 font-normal">
        Please Add Your Quiz Here
      </Typography>
      <form className="mt-8 mb-2  w-full mx-auto ">
        <div className="mb-1 grid grid-cols-2 gap-6">
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Question <span className="text-red-500">*</span>
            </Typography>
            <Input
              value={quizQuestion!.question}
              onChange={(e) =>
                dispatch(
                  setQuizQuestion({
                    ...quizQuestion!,
                    question: e.target.value,
                  })
                )
              }
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="mb-3"
            >
              Description
            </Typography>
            <Input
              value={quizQuestion.description}
              onChange={(e) =>
                dispatch(
                  setQuizQuestion({
                    ...quizQuestion!,
                    description: e.target.value,
                  })
                )
              }
              crossOrigin={""}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <Typography
                placeholder={""}
                variant="h6"
                color="blue-gray"
                className="mb-3"
              >
                Option {index + 1}
              </Typography>
              <Input
                crossOrigin={""}
                size="lg"
                value={Object.values(quizOptions!.options)[index]}
                onChange={(e) =>
                  dispatch(
                    setQuizOptions({
                      ...quizOptions!,
                      options: {
                        ...quizOptions!.options,
                        [`option${index + 1}`]: e.target.value,
                      },
                    })
                  )
                }
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          ))}

          {quizOptions &&
            Object.values(quizOptions!.options).every(
              (option) => option !== ""
            ) && (
              <div>
                <Typography
                  placeholder={""}
                  variant="h6"
                  color="blue-gray"
                  className="mb-3"
                >
                  Correct Option
                </Typography>
                <Select
                  value={quizOptions.correctOption}
                  onChange={(value) => {
                    value &&
                      dispatch(
                        setQuizOptions({
                          ...quizOptions,
                          correctOption: value,
                        })
                      );
                  }}
                  placeholder={""}
                >
                  {Object.values(quizOptions!.options).map((option, index) => (
                    <Option key={index} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </div>
            )}
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            placeholder={""}
            disabled={
              !quizQuestion.question ||
              !quizQuestion.description ||
              !quizOptions ||
              !Object.values(quizOptions!.options).every(
                (option) => option !== ""
              ) ||
              !quizOptions!.correctOption
            }
            onClick={handleAddQuiz}
          >
            Add Quiz
          </Button>
          <Button
            disabled={!quizList.length}
            placeholder={""}
            onClick={handleSubmit}
          >
            Publish
          </Button>
        </div>
      </form>
    </Card>
  );
}
