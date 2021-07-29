import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "First post" }]
    });
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).not.toHaveLength(0);
  });
});
