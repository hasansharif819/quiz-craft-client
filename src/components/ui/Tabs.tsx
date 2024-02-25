import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Tabs as MTTabs,
  Tab,
  TabPanel,
  TabsBody,
  TabsHeader
} from "@material-tailwind/react";
import React from "react";
import { AddQuizForm } from "./AddQuizForm";
import { Card } from "./Card";
import QuizList from "./QuizList";
import { SelectModule } from "./SelectModule";
import { Stepper } from "./Stepper";

export function Tabs() {
  const data = [
    {
      label: "Quiz List",
      value: "quiz-list",
      icon: Square3Stack3DIcon,
      desc: <QuizList />,
    },
    {
      label: "Add Quiz",
      value: "add-quiz",
      icon: UserCircleIcon,
      desc: (
        <Card>
          <Stepper
            steps={[
              {
                value: 0,
                name: "Select Module",
                component: <SelectModule />,
              },
              {
                value: 1,
                name: "Add Quiz",
                component: <AddQuizForm />,
              },
            ]}
          />
        </Card>
      ),
    },
  ];

  return (
    <MTTabs value={"quiz-list"} ref={React.createRef()}>
      <TabsHeader placeholder={""}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
        {/* set current tab from tabValue and data combines*/}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </MTTabs>
  );
}
