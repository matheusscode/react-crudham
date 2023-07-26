import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
