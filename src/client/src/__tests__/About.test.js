import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About component", () => {
  test("About component render", () => {
    render(<About />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element.tagName).toBe("H1");
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent("This is a Twitch chat bot");
  });
});
