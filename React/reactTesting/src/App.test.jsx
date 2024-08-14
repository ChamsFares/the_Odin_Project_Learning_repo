import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App></App>);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App></App>);
    const button = screen.getByRole("button", { name: "Click Me" });
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
