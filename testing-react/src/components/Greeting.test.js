import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders hello world as text", () => {
    render(<Greeting />);
    const helloWorld = screen.getByText("Hello world");
    expect(helloWorld).toBeInTheDocument();
  });

  test('renders "good to see you" without clicking the button', () => {
    render(<Greeting />);
    const goodToSeeYou = screen.getByText("good to see you", { exact: false });
    expect(goodToSeeYou).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const changed = screen.getByText("Changed!");
    expect(changed).toBeInTheDocument();
  });

  test('does\'t render "good to see you!" if the button was clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const goodToSeeYou = screen.queryByText("good to see you", {
      exact: false
    });
    expect(goodToSeeYou).toBeNull();
  });
});
