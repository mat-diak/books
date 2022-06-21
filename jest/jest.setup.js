import "@testing-library/jest-dom/extend-expect";
import { server } from "../src/__mocks__/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
