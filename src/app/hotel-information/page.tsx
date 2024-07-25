"use client";
import {
  Button,
  Input,
  Select,
  SelectItem,
  TimeInput,
} from "@nextui-org/react";
import React from "react";

const HotelInformation = () => {
  return (
    <div className="m-6 flex flex-col items-center">
      <h1 className="text-4xl mb-10">Hotel Information</h1>
      <form className="w-full ">
        {/* left */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full mb-10">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Input type="text" label="Hotel Name" size="sm" />
            </div>
            <div>
              <Input type="text" label="Address" size="sm" />
            </div>
            <div>
              <Input type="text" label="Postal Code" size="sm" />
            </div>
            <div>
              <Input type="text" label="Country" size="sm" />
            </div>
          </div>
          {/* right */}
          <div className="grid gap-4">
            <div>
              <Select label="Property Type" size="sm">
                <SelectItem key="1">Option 1</SelectItem>
                <SelectItem key="2">Option 2</SelectItem>
                <SelectItem key="3">Option 3</SelectItem>
                <SelectItem key="4">Option 4</SelectItem>
              </Select>
            </div>
            <div>
              <Select label="Building Type" size="sm">
                <SelectItem key="1">Option 1</SelectItem>
                <SelectItem key="2">Option 2</SelectItem>
                <SelectItem key="3">Option 3</SelectItem>
                <SelectItem key="4">Option 4</SelectItem>
              </Select>
            </div>
            <div>
              <Input type="text" label="No of Floors" size="sm" />
            </div>
            <div>
              <Input type="text" label="No of Rooms" size="sm" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl mb-4">Contact Information</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-10">
          <div className="grid grid-cols-1 gap-4 ">
            <div>
              <Input type="text" label="Contact No" size="sm" />
            </div>
            <div>
              <Input type="text" label="Email" size="sm" />
            </div>
            <div>
              <Input type="text" label="Fax" size="sm" />
            </div>
            <div>
              <Input type="text" label="Web URL" size="sm" />
            </div>
            <div>
              <Input type="text" label="Hotel Logo" size="sm" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 mb-10">
          <div>
            <h1 className="text-2xl mb-4">Tax Information</h1>
            <div>
              <Input type="text" label="Tax No" size="sm" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-4">Applicable Taxes</h1>
            <div className="flex gap-2">
              <Input type="text" label="Vat" size="sm" />
              <Button size="md" className=" rounded-md" color="primary">
                Edit
              </Button>
            </div>
          </div>
        </div>
        <h1 className="text-2xl mb-4">Reservation Policies</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 mb-10">
          <div>
            <Input type="text" label="Child Policy" size="sm" />
          </div>

          <div>
            <Input type="text" label="Child Policy" size="sm" />
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-md mb-4">Check-in & Check-out Information</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <TimeInput isRequired label="Check-in Time" />
            </div>

            <div>
              <Input type="text" label="Early Check-in Charge" size="sm" />
            </div>
            <div>
              <TimeInput isRequired label="Check-out Time" />
            </div>
            <div>
              <Input type="text" label="Late Check-in charge" size="sm" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelInformation;
