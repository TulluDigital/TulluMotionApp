export interface Servico {
  nome: string;
  preco: number;
  descricao: string;
}

export interface Profissional {
  id: string;
  nome: string;
  foto: string;
  especialidade: string;
  tags: string[];
  avaliacao: number;
  projetosConcluidos: number;
  precoHora: number;
  descricao: string;
  servicos: Servico[];
  portfolio?: string[]; // Opcional, para compatibilidade futura
}

export interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  thumbnail_url: string;
  autor_id: string;
  autor_nome: string;
  tags: string[];
  rating: number;
  alunos_count: number;
}

export interface Categoria {
  id: string;
  nome: string;
  icon: any; // Lucide icon type
}
