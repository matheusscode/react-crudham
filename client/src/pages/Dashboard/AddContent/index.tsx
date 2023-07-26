import { ToAdd } from "../../../components/Modals/ToAdd";

import { AiOutlineFieldNumber } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { useTable } from "../../../context/TableContext";
import { useState, ChangeEvent } from "react";
import { InputKey, OrderData } from "../../../types";

export default function AddContent() {
  const { handleAddApplication } = useTable();

  const [inputValue, setInputValue] = useState<InputKey>({
    applicationCode: "",
    applicationName: "",
    applicationDescription: "",
    responsible: "",
    technologie: "",
    acessLink: "",
  });

  const onSubmit = async () => {
    try {
      const applicationData: OrderData = {
        CD_APLICACAO: inputValue.applicationCode,
        DS_APLICACAO: inputValue.applicationName,
        NM_RESPONSAVEL: inputValue.responsible,
        NM_TECNOLOGIA: inputValue.technologie,
        DS_LINK_ACESSO: inputValue.acessLink,
        NM_APLICACAO: inputValue.applicationDescription,
      };

      await handleAddApplication(applicationData);

      setInputValue({
        applicationCode: "",
        applicationName: "",
        applicationDescription: "",
        responsible: "",
        technologie: "",
        acessLink: "",
      });

      console.log(handleAddApplication);
    } catch (error) {
      console.error("Error adding application:", error);
    }
  };

  return (
    <ToAdd.Root buttonText="Adicionar" title="Adicionar" event={onSubmit}>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineFieldNumber} />
        <ToAdd.Input
          name="applicationCode"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Código da Aplicação"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineAppstore} />
        <ToAdd.Input
          name="applicationName"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Nome da Aplicação"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={MdOutlineLibraryBooks} />
        <ToAdd.Input
          name="applicationDescription"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Descrição da Aplicação"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineUser} />
        <ToAdd.Input
          name="responsible"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Nome do Responsável"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={BsCodeSlash} />
        <ToAdd.Input
          name="technologie"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Nome da Tecnologia"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineLink} />
        <ToAdd.Input
          name="acessLink"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Link de Acesso"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
    </ToAdd.Root>
  );
}
