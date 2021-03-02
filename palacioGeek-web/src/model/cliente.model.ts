import Documento from './Documento.model';
import { TipoCliente } from './TipoCliente.model';
import { Usuario } from './Usuario.model';
import { Endereco } from './Endereco.model';
export class Cliente {
  id?: number;
  nome?: string;
  sobrenome?: string;
  dataNascimento?: Date;
  sexo?: string;
  documento?: Documento;
  usuario?: Usuario;
  tipoCliente?: TipoCliente;
  endereco?: Endereco;
}

