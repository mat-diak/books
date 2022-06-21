import { rest } from "msw";
import searchQueryResponse from "./fixtures/searchQueryResponse";
import recommendationsByThemeResponse_classics from "./fixtures/recommendationsByThemeResponse_classics";
import recommendationsByThemeResponse_fantasy from "./fixtures/recommendationsByThemeResponse_fantasy";

export const handlers = [
  // "/resources/titles/?start=0&max=10&expandLevel=1&search=";
  rest.get(/.*resources\/titles\/.*/, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get("search");
    const searchTheme = req.url.searchParams.get("theme");

    if (searchQuery) {
      if (searchQuery === "noResults") {
        return res(ctx.status(200), ctx.json({}));
      }
      return res(ctx.status(200), ctx.json(searchQueryResponse));
    }

    if (searchTheme) {
      if (searchTheme == "Fantasy") {
        return res(
          ctx.status(200),
          ctx.json(recommendationsByThemeResponse_fantasy)
        );
      }

      return res(
        ctx.status(200),
        ctx.json(recommendationsByThemeResponse_classics)
      );
    }
  }),
];
