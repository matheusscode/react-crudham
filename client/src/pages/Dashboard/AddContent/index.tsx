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
    applicationName: "",
    applicationDescription: "",
    responsible: "",
    technologies: "",
    acessLink: "",
  });

  const onSubmit = async () => {
    try {
      const applicationData: OrderData = {
        NM_APLICACAO: inputValue.applicationName,
        DS_APLICACAO: inputValue.applicationDescription,
        NM_RESPONSAVEL: inputValue.responsible,
        DS_TECNOLOGIAS: inputValue.technologies,
        DS_LINK_ACESSO: inputValue.acessLink,
      };

      await handleAddApplication(applicationData);

      setInputValue({
        applicationName: "",
        applicationDescription: "",
        responsible: "",
        technologies: "",
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
          name="technologies"
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
