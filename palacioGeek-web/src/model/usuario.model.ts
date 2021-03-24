import { Status } from "./status.model";
import { TipoUsuario } from "./TipoUsuario.model";

export class Usuario {
  id?: number;
  email?: string;
  senha?: string;
  reSenha?: string;
  tipoUsuario?: TipoUsuario;
  status?: Status;
}
