import { Cidade } from "./Cidade.model";

export class Endereco {
  id?: number;
  logradouro?: string;
  numero?: string;
  cep?: string;
  complemento?: string;
  cidade?: Cidade;
}
