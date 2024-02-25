import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About component", () => {
  test("About container element is present in the document", () => {
    render(<About />);
    const conElement = screen.getByTestId("about-container");
    expect(conElement).toBeInTheDocument();
  });

  test("About component render container", () => {
    render(<About />);
    const paperElement = screen.getByTestId("about-paper");
    expect(paperElement).toBeInTheDocument();
  });

  test("About component render Typography first", () => {
    render(<About />);
    const paperElement = screen.getByTestId("about-typo-title");
    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveTextContent("About Twitch Bot");
  });

  test("About component render Typography second", () => {
    render(<About />);
    const paperElement = screen.getByTestId("about-typo-text");
    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveTextContent(
      "This is a Twitch chat bot created using tmi.js and the Twitch API."
    );
  });
});
