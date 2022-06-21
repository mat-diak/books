/**
 * @jest-environment jsdom
 */

import Recommendations from "../Recommendations";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";

test("shows 20 results WHEN choosing category", async () => {
  render(<Recommendations />);

  // Chooses a theme
  const buttons = screen.getAllByRole("button");
  await userEvent.click(buttons[0]);

  // Find gallery and books
  const gallery = await screen.findByTestId("recommendations_gallery");
  const bookItems = gallery.querySelectorAll("div[data-testid='book_item']");

  // Checks if there is 20 books
  expect(bookItems).toHaveLength(20);
});

test("button loads WHEN choosing category", async () => {
  render(<Recommendations />);

  const buttons = screen.getAllByRole("button");

  // Chooses a theme
  await userEvent.click(buttons[0]).then(() => {
    // Checks if button is loading
    expect(buttons[0]).not.toContain("Classics");
    expect(within(buttons[0]).getByTestId("loading_icon")).toBeInTheDocument();
  });
});

test("buttons disabled WHEN category loading", async () => {
  render(<Recommendations />);

  // Chooses a theme
  const buttons = screen.getAllByRole("button");
  await userEvent.click(buttons[0]).then(() => {
    // Checks if button is loading
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});

test("buttons enabled WHEN category loaded", async () => {
  render(<Recommendations />);

  // Gets the recommendation buttons
  const buttons = screen.getAllByRole("button");
  await userEvent.click(buttons[0]);

  await waitFor(() => {
    expect(within(buttons[0]).queryByTestId("loading_icon")).toBeNull();
    buttons.forEach((button) => {
      expect(button).toBeEnabled();
    });
  });
});
