/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";
import { server } from "../../__mocks__/server";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../Navbar";
import * as extra from "../SearchBar";

const searchResultsTestId = "search-results";
const searchInputTestId = "search-input";
const searchLoadingTestId = "search-loading";
const searchCloseTestId = "search-clear";

jest.setTimeout(20000);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("does not shows results ON intial render ", () => {
  render(<SearchBar />);
  expect(screen.queryByTestId(searchResultsTestId)).toBeNull();
});

test("shows loading icon GIVEN a query", async () => {
  render(<SearchBar />);

  await userEvent.type(screen.getByTestId(searchInputTestId), "Hi");
  const loadingIcon = screen.getByTestId(searchLoadingTestId);

  expect(loadingIcon).toBeInTheDocument();
});

test("shows results GIVEN a query", async () => {
  render(<SearchBar />);

  await userEvent.type(screen.getByTestId(searchInputTestId), "Pooh");
  const results = await screen.findAllByTestId("search-result", undefined, {
    timeout: 5000,
  });

  expect(results.length).toBe(10);
  results.forEach((result) => {
    expect(result).toBeInTheDocument();
  });
});

test("hides results GIVEN query WHEN clicking on close", async () => {
  render(<SearchBar />);

  await userEvent.type(screen.getByTestId(searchInputTestId), "Pooh");
  await screen.findAllByTestId(searchResultsTestId, undefined, {
    timeout: 5000,
  });

  await userEvent.click(screen.getByTestId(searchCloseTestId));

  expect(screen.queryByTestId(searchResultsTestId)).toBeNull();
});

test("hides results GIVEN query ON click outside", async () => {
  render(<Navbar />);

  await userEvent.type(screen.getByTestId(searchInputTestId), "Pooh");
  await screen.findAllByTestId(searchResultsTestId, undefined, {
    timeout: 5000,
  });

  await userEvent.click(screen.getByRole("navigation"));

  expect(screen.queryByTestId(searchResultsTestId)).toBeNull();
});

// does not show list when there is no results
test("does not show results GIVEN query WHEN no results", async () => {
  render(<SearchBar />);

  await userEvent
    .type(screen.getByTestId(searchInputTestId), "noResults")
    .then(() => {
      expect(screen.queryByTestId(searchResultsTestId)).toBeNull();
    });
});
