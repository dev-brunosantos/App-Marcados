export interface Usuario {
    email: string;
    senha: string;
}

export interface Login {
    usuario: Usuario;
    login: (email: string, senha: string) => void;
    erro: boolean;
}