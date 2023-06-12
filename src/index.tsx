import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div>
    {/* react-query를 앱 전체에서 사용하기위해 최상위단에서 선언해줌 */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </div>
);
