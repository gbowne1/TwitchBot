import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandList from "../components/CommandList";
import allCommands from "../commands/allCommands";

describe("CommandList component", () => {
  test("CommandList component must render container div", () => {
    render(<CommandList />);
    const divElement = screen.getByTestId("commandList-con");
    expect(divElement.tagName).toBe("DIV");
    expect(divElement).toBeInTheDocument();
  });

  test("CommandList component must render Card to the number of elements in commands length", () => {
    render(<CommandList />);
    const cardElements = screen.getAllByTestId("commandList-card");
    expect(cardElements.length).toBe(allCommands.length);
  });
});
