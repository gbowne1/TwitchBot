import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandUsage from "../components/CommandUsage";
import { MemoryRouter, Route, Routes } from "react-router";

describe("CommandUsage component", () => {
  test("CommandUsage component must render container div", () => {
    render(<CommandUsage />);
    const divElement = screen.getByTestId("commandUsage-con");
    expect(divElement.tagName).toBe("DIV");
    expect(divElement).toBeInTheDocument();
  });

  test("CommandUsage component must render h1 that starts with commandName from useParams +  Command Usage text", () => {
    const commandName = "testing";
    render(
      <MemoryRouter initialEntries={[`/command/${commandName}`]}>
        <Routes>
          <Route path="/command/:commandName" element={<CommandUsage />} />
        </Routes>
      </MemoryRouter>
    );
    const headingElement = screen.getByRole("heading");
    expect(headingElement.tagName).toBe("H1");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(`${commandName} Command Usage`);
  });

  test("CommandUsage component must render two P that have text + commandName from useParams", () => {
    const commandName = "testing";
    render(
      <MemoryRouter initialEntries={[`/command/${commandName}`]}>
        <Routes>
          <Route path="/command/:commandName" element={<CommandUsage />} />
        </Routes>
      </MemoryRouter>
    );
    const pElements = screen.getAllByTestId("commandUsage-p");
    expect(pElements).toHaveLength(2);
    expect(pElements[0].tagName).toBe("P");
    expect(pElements[1].tagName).toBe("P");
    expect(pElements[0]).toHaveTextContent(
      `Here is the usage information for the ${commandName} command.`
    );
    expect(pElements[1]).toHaveTextContent(
      `Click on the Learn More button to see more about the ${commandName} command.`
    );
  });
});
