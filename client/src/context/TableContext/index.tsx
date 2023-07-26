import { useContext } from "react";
import { TableContext } from "./TableCreate";

export const useTable = () => useContext(TableContext);
