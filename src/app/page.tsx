"use client";
import React from "react";

import Nav from "@/components/Navbar";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  DatePicker,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function App() {
  const handleSelectChange = (value: string) => {};
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex-1 place-items-center flex items-center justify-center">
        <Card className="max-w-screen-md w-full mx-auto ">
          <CardBody className="grid grid-cols-2 gap-4">
            <div>
              <Input type="text" label="First Name" size="sm" />
            </div>
            <div>
              <Input type="text" label="Last Name" size="sm" />
            </div>
            <div>
              <DatePicker label="Birth date" size="sm" />
            </div>
            <div>
              <RadioGroup label="Gender" orientation="horizontal" size="sm">
                <Radio value="buenos-aires">Male</Radio>
                <Radio value="sydney">Female</Radio>
              </RadioGroup>
            </div>
            <div>
              <Input type="email" label="Email" size="sm" />
            </div>
            <div>
              <Input type="number" label="Phone" size="sm" />
            </div>
            <div className=" col-span-2">
              <Select label="Select an Option" size="sm">
                <SelectItem key="1">Option 1</SelectItem>
                <SelectItem key="2">Option 2</SelectItem>
                <SelectItem key="3">Option 3</SelectItem>
                <SelectItem key="4">Option 4</SelectItem>
              </Select>
            </div>
            <div>
              <Checkbox size="sm" defaultSelected>
                Terms and Conditions
              </Checkbox>
            </div>
            <div className="col-span-2 flex justify-end gap-2">
              <Button color="default" size="sm">
                Cancel
              </Button>
              <Button color="primary" size="sm">
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
