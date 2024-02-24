import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandList, { commands } from "../components/CommandList";

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
    expect(cardElements.length).toBe(commands.length);
  });

  test("CommandList component must render h5 to the number of elements in commands length", () => {
    render(<CommandList />);
    const headingElements = screen.getAllByTestId("commandList-card-h5");
    expect(headingElements.length).toBe(commands.length);
    headingElements.forEach((item, i) => {
      expect(item).toHaveTextContent(commands[i]);
    });
  });

  test("CommandList component must render body2 to the number of elements in commands length", () => {
    render(<CommandList />);
    const bodyElements = screen.getAllByTestId("commandList-card-body2");
    expect(bodyElements.length).toBe(commands.length);
    expect(bodyElements[0]).toHaveTextContent(
      "Use this command to interact with the Twitch bot."
    );
  });

  test("CommandList component must render Button to the number of elements in commands length", () => {
    render(<CommandList />);
    const ButtonElements = screen.getAllByRole("button");
    expect(ButtonElements.length).toBe(commands.length * 2);
    expect(ButtonElements[0]).toHaveTextContent("Info");
  });
});
