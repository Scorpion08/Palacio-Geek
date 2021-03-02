import { TipoDocumento } from "./TipoDocumento.model";
import { Cliente } from './Cliente.model';

export default class Documento {
  id?: number;
  codigo?: string;
  validade?: Date;
  tipoDocumento?: TipoDocumento;
  cliente?: Cliente;
}
