/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor, getByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";
import { Provider } from "react-redux";
import { store } from "../../store";
import "@testing-library/jest-dom/extend-expect";

describe("SearchBar", () => {
  // INITIAL RENDER
  test("does not shows results on intial render ", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.queryByTestId("search-results")).toBeNull();
  });

  // GIVEN A QUERY
  test("shows loading icon given a query", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    await userEvent.type(screen.getByTestId("search-input"), "Pooh");

    const loadingIcon = screen.getByTestId("search-loading");
    expect(loadingIcon).toBeInTheDocument();
  });

  test("shows results given a query", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    await userEvent.type(screen.getByTestId("search-input"), "Pooh");
    const resultsList = await screen.findByTestId("search-results");

    expect(resultsList).toBeInTheDocument();
  });
});
