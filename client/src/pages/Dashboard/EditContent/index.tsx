import { Edit } from "../../../components/Modals/Edit";

import { AiOutlineFieldNumber } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { useTable } from "../../../context/TableContext";
import { useState } from "react";
import { InputKey, OrderData } from "../../../types";
import { BiPencil } from "react-icons/bi";

export default function EditContent() {
  const { handleAddApplication } = useTable();

  const [inputValue, setInputValue] = useState<InputKey>({
    applicationName: "",
    applicationDescription: "",
    responsible: "",
    technologie: "",
    acessLink: "",
  });

  const onSubmit = async () => {
    try {
      const applicationData: OrderData = {
        NM_APLICACAO: inputValue.applicationName,
        DS_APLICACAO: inputValue.applicationDescription,
        NM_RESPONSAVEL: inputValue.responsible,
        NM_TECNOLOGIA: inputValue.technologie,
        DS_LINK_ACESSO: inputValue.acessLink,
      };

      await handleAddApplication(applicationData);

      setInputValue({
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
    <Edit.Root icon={BiPencil} title="Editar" event={onSubmit}>
      <Edit.Content>
        <Edit.Icon icon={AiOutlineAppstore} />
        <Edit.Input
          name="applicationName"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Nome da Aplicação"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Edit.Content>
      <Edit.Content>
        <Edit.Icon icon={MdOutlineLibraryBooks} />
        <Edit.Input
          name="applicationDescription"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Descrição da Aplicação"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Edit.Content>
      <Edit.Content>
        <Edit.Icon icon={AiOutlineUser} />
        <Edit.Input
          name="responsible"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Nome do Responsável"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Edit.Content>
      <Edit.Content>
        <Edit.Icon icon={BsCodeSlash} />
        <Edit.Input
          name="technologie"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Nome da Tecnologia"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Edit.Content>
      <Edit.Content>
        <Edit.Icon icon={AiOutlineLink} />
        <Edit.Input
          name="acessLink"
          inputState={inputValue}
          setInputState={setInputValue}
          placeholder="Link de Acesso"
          type="text"
        />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Edit.Content>
    </Edit.Root>
  );
}
