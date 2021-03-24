import { Cliente } from "./cliente.model";
import { TipoDocumento } from "./TipoDocumento.model";

export default class Documento {
  id?: number;
  codigo?: string;
  validade?: Date;
  tipoDocumento?: TipoDocumento;
  cliente?: Cliente;
}
