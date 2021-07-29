import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Renders hello world as text", () => {
    render(<Greeting />);
    const helloWorld = screen.getByText("Hello world");
    expect(helloWorld).toBeInTheDocument();
  });
});
