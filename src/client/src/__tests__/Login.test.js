/* global Promise */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AuthContext } from "../context/authContext";
import Login from "../components/Login";

describe("Login component", () => {
  test("renders login form when user is not logged in", () => {
    render(
      <AuthContext.Provider value={{ currentUser: null }}>
        <Login />
      </AuthContext.Provider>
    );

    const loginForm = screen.getByRole("form");
    expect(loginForm).toBeInTheDocument();
  });

  test("renders logout button when user is logged in", () => {
    render(
      <AuthContext.Provider value={{ currentUser: { username: "testuser" } }}>
        <Login />
      </AuthContext.Provider>
    );

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });

  test("displays error message when login fails", async () => {
    const errorMessage = "Invalid credentials.";

    const loginMock = jest
      .fn()
      .mockImplementation(() =>
        Promise.reject({ response: { data: { error: errorMessage } } })
      );

    global.console.error = jest.fn();

    render(
      <AuthContext.Provider value={{ currentUser: null, login: loginMock }}>
        <Login />
      </AuthContext.Provider>
    );

    const usernameInput = screen.getByPlaceholderText("username");
    const passwordInput = screen.getByPlaceholderText("password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const errorAlert = screen.getByRole("alert");
      expect(errorAlert).toHaveTextContent(errorMessage);
      expect(loginMock).toHaveBeenCalledTimes(1);
      expect(global.console.error).toHaveBeenCalledTimes(1);
    });
  });

  test("calls logout function when logout button is clicked", async () => {
    const logoutMock = jest.fn();

    render(
      <AuthContext.Provider
        value={{ currentUser: { username: "testuser" }, logout: logoutMock }}
      >
        <Login />
      </AuthContext.Provider>
    );

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);

    expect(logoutMock).toHaveBeenCalledTimes(1);
  });
});
