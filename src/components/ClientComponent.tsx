"use client";

import React from "react";

type ClientComponentProps = {
  children: React.ReactNode;
};

export const ClientComponent = ({ children }: ClientComponentProps) => {
  return (
    <div>
      <h1 onMouseOver={() => console.log("hover")}>ClientComponent</h1>
      {children}
    </div>
  );
};
