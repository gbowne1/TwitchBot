import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Help, { helpContent } from "../components/Help";

describe("Help component", () => {
  test("Help component must render H4 with helpContent.h4Text", () => {
    render(<Help />);
    const h4Element = screen.getByText(helpContent.h4Text);
    expect(h4Element).toBeInTheDocument();
  });

  test("Help component must render body1 with helpContent.body1Text", () => {
    render(<Help />);
    const body1Element = screen.getByText(helpContent.body1Text);
    expect(body1Element).toBeInTheDocument();
  });

  test("Help component must render H5 with helpContent.firstH5Text", () => {
    render(<Help />);
    const body1Element = screen.getByText(helpContent.firstH5Text);
    expect(body1Element).toBeInTheDocument();
  });

  test("Help component must render body2 with helpContent.firstBody2Text", () => {
    render(<Help />);
    const body1Element = screen.getByText(helpContent.firstBody2Text);
    expect(body1Element).toBeInTheDocument();
  });

  test("Help component must render H5 with helpContent.secondH5Text", () => {
    render(<Help />);
    const body1Element = screen.getByText(helpContent.secondH5Text);
    expect(body1Element).toBeInTheDocument();
  });

  test("Help component must render body2 with helpContent.firstBody2Text", () => {
    render(<Help />);
    const body1Element = screen.getByText(helpContent.firstBody2Text);
    expect(body1Element).toBeInTheDocument();
  });
});
