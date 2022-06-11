import { rest } from "msw";
import searchQueryResponse from "./fixtures/searchQueryResponse";

export const handlers = [
  rest.get(/.*resources\/titles/, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get("search");

    if (searchQuery === "noResults") {
      return res(ctx.status(200), ctx.json({}));
    }
    return res(ctx.status(200), ctx.json(searchQueryResponse));
  }),
];
