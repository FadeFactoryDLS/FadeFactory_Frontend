import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeleteUser from "./DeleteUser"; // Adjust the import path as necessary

test("handles input changes", () => {
  // Render the DeleteUser component
  render(<DeleteUser />);

  // Find the input field by its placeholder text
  const accountIdInput = screen.getByPlaceholderText(/Enter Account ID/i);

  // Simulate typing in the Account ID input
  fireEvent.change(accountIdInput, { target: { value: "12345" } });

  // Assert that the input value has changed
  expect((accountIdInput as HTMLInputElement).value).toBe("12345");
});
