import { useState, ReactNode } from "react";
import { TableContext } from "./TableCreate";
import { api } from "../../services/api";
import useFetch from "../../hooks/useFetch";
import { OrderData } from "../../types";

interface TableProviderProps {
  children: ReactNode;
}

export default function TableProvider({ children }: TableProviderProps) {
  const { data: dataTable, isFetching: dataFetching } =
    useFetch<OrderData[]>("/applications");

  const handleAddApplication = async (applicationData: OrderData) => {
    try {
      const response = await api.post("/add-application/", applicationData);
      console.log("Application added:", response.data);
    } catch (error) {
      console.error("Error adding application:", error);
    }
  };

  const handleDeleteApplication = async (applicationId: string) => {
    try {
      const response = await api.delete(`/delete-application/${applicationId}`);
      console.log("Application deleted:", response.data);
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <TableContext.Provider
      value={{
        handleDeleteApplication,
        handleAddApplication,
        dataTable,
        dataFetching,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}
