import { useState, useEffect, ReactNode } from "react";
import { TableContext } from "./TableCreate";

interface TableProviderProps {
  children: ReactNode;
}

export default function TableProvider({ children }: TableProviderProps) {

  return <TableContext.Provider value={{}}>{children}</TableContext.Provider>;
}
