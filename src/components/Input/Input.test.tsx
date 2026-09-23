import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("associates the label with the input", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("exposes validation errors accessibly", () => {
    render(<Input label="Email" error="Email is required" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });
});