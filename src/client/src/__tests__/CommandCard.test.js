import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CommandCard from "../components/CommandCard";

describe("CommandCard", () => {
  test("renders command and children correctly", () => {
    const command = "Test Command";
    const children = "Test Children";
    const { getByTestId } = render(
      <CommandCard command={command}>{children}</CommandCard>
    );

    const commandElement = getByTestId("commandList-card-h5");
    const childrenElement = getByTestId("commandList-card-body2");
    expect(commandElement).toHaveTextContent(command);
    expect(childrenElement).toHaveTextContent(children);
  });

  test("calls onLearnMore and onExecute callbacks when buttons are clicked", () => {
    const onLearnMoreMock = jest.fn();
    const onExecuteMock = jest.fn();
    const { getByText } = render(
      <CommandCard
        command="Test Command"
        onLearnMore={onLearnMoreMock}
        onExecute={onExecuteMock}
      />
    );

    const infoButton = getByText("Info");
    const executeButton = getByText("Execute");

    fireEvent.click(infoButton);
    fireEvent.click(executeButton);

    expect(onLearnMoreMock).toHaveBeenCalledTimes(1);
    expect(onExecuteMock).toHaveBeenCalledTimes(1);
  });
});
