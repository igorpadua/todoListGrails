import { Status } from "./status.enum";

export interface Task {
  id?: number;
  nome: string;
  descricao: string;
  dataTermino: Date;
  prioridade: number | null;
  categoria: string;
  status: Status;
}
