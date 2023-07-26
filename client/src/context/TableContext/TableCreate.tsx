import { createContext } from "react";
import { OrderData } from "../../types";

export interface TableContextType {
  handleDeleteApplication: (applicationId: string) => void;
  handleAddApplication: (application: OrderData) => void;
  dataTable: OrderData[] | null;
  dataFetching: boolean;
}

export const TableContext = createContext<TableContextType>({
  handleDeleteApplication: () => {},
  handleAddApplication: () => {},
  dataTable: null,
  dataFetching: false,
});
