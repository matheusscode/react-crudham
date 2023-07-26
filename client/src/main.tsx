import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import TableProvider from "./context/TableContext/TableProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TableProvider>
    <BrowserRouter>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  </TableProvider>
);
