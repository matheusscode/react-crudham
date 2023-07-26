import { Filter } from "../../../components/Modals/Filter";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function FilterContent() {
  return (
    <Filter.Root buttonText="Busca especifica" title="Filtrar por:">
      <Filter.Content>
        <Filter.Icon size="1.4rem" icon={AiOutlineFieldNumber} />
        <Filter.Input placeholder="Digite o número da aplicação" type="text" />
        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Filter.Content>
      <Filter.Content>
        <Filter.Icon size="1.4rem" icon={AiOutlineAppstore} />
        <Filter.Input placeholder="Digite o nome da aplicação" type="text" />
        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Filter.Content>
      <Filter.Content>
        <Filter.Icon size="1.4rem" icon={AiOutlineUser} />
        <Filter.Input placeholder="Digite o nome do responsável" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Filter.Content>
      <Filter.Content>
        <Filter.Icon size="1.4rem" icon={BsCodeSlash} />
        <Filter.Input placeholder="Digite o nome da tecnologia" type="text" />

        {/* 
      <Filter.Message color="red" size="0.8rem" text=" Número da aplicação não encontrada" />
    */}
      </Filter.Content>
    </Filter.Root>
  );
}
