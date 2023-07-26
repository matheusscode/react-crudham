import { ToAdd } from "../../../components/Modals/ToAdd";

import { AiOutlineFieldNumber } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

export default function AddContent() {
  return (
    <ToAdd.Root buttonText="Adicionar" title="Adicionar">
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineFieldNumber} />
        <ToAdd.Input placeholder="Código da Aplicação" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineAppstore} />
        <ToAdd.Input placeholder="Nome da Aplicação" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={MdOutlineLibraryBooks} />
        <ToAdd.Input placeholder="Descrição da Aplicação" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineUser} />
        <ToAdd.Input placeholder="Nome do Responsável" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={BsCodeSlash} />
        <ToAdd.Input placeholder="Nome da Tecnologia" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
      <ToAdd.Content>
        <ToAdd.Icon icon={AiOutlineLink} />
        <ToAdd.Input placeholder="Link de Acesso" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </ToAdd.Content>
    </ToAdd.Root>
  );
}
