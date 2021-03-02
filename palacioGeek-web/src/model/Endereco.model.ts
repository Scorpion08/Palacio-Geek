import { Cidade } from "./Cidade.model";
import { TipoEndereco } from "./TipoEndereco.model";

export class Endereco {
  id?: number;
  logradouro?: string;
  numero?: string;
  bairro?:string;
  cep?: string;
  complemento?: string;
  cidade?: Cidade;
  tipoEndereco?: TipoEndereco;
}
