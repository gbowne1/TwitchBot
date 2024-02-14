import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ThemeProvider, { ColorModeContext } from "../ThemeProvider";
import AppBarComponent from "../components/AppBar";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// Mock the ColorModeContext value
const mockColorModeContext = {
  colorMode: {
    toggleColorMode: jest.fn(),
  },
};
const handleDrawerChange = jest.fn();

test("AppBarComponent toggles drawer menu and dark mode", async () => {
  // Render the component with mocked context providers
  render(
    <ThemeProvider>
      <ColorModeContext.Provider value={mockColorModeContext}>
        <AppBarComponent />
      </ColorModeContext.Provider>
    </ThemeProvider>
  );

  //
  const h6Element = screen.getByRole("heading");
  expect(h6Element).toBeInTheDocument();
  expect(h6Element).toHaveTextContent("TwitchBot");

  // Click the dark mode toggle
  fireEvent.click(screen.getByTestId("themeBtn"));
  // Assert that toggleColorMode function is called
  expect(mockColorModeContext.colorMode.toggleColorMode).toHaveBeenCalledTimes(
    1
  );
});
