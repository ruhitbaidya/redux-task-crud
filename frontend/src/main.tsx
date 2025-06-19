import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster position="top-center" />
    <RouterProvider router={routes} />
  </Provider>
);
