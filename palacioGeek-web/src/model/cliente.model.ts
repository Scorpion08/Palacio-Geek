import { Usuario } from './usuario.model';
export class Cliente {
  id: number;
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
  sexo: string;
  cpf: string;
  usuario: Usuario;
}

