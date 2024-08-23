export interface CreateUserDto {
  name: string;
  email: string;
  phone: string; // não é numero pq se começar com 0, o 0 seria omitido
  cpf: string; // não é numero pq se começar com 0, o 0 seria omitido
  password: string;
}
