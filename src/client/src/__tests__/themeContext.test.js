import React, { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ThemeProvider, { ColorModeContext } from "../context/themeContext";

describe("ThemeProvider component", () => {
  test("renders children without crashing", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Child Component</div>
      </ThemeProvider>
    );
    const childElement = screen.getByTestId("child");
    expect(childElement).toBeInTheDocument();
  });

  test("toggles color mode when toggleColorMode is called", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole("button", {
      name: "Toggle Color Mode",
    });
    const initialMode = localStorage.getItem("mode");

    expect(initialMode).toBe("light");

    // Click the toggle button
    fireEvent.click(toggleButton);

    const updatedMode = localStorage.getItem("mode");
    expect(updatedMode).toBe("dark");
  });
});

// A test component to be used in the second test
const TestComponent = () => {
  const { colorMode } = useContext(ColorModeContext);

  return (
    <div>
      <button onClick={colorMode.toggleColorMode}>Toggle Color Mode</button>
    </div>
  );
};
