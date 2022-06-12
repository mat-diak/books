import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "../store/mainSlice";
import { searchSlice } from "../store/searchSlice";
import { recommendationsSlice } from "../store/RecommendationsSlice";

const AllTheProviders = ({ children }) => {
  const store = configureStore({
    reducer: {
      recommendations: recommendationsSlice.reducer,
      search: searchSlice.reducer,
      main: mainSlice.reducer,
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
