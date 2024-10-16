import { router } from "expo-router";
import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";
import { Login, Usuario } from "@/interfaces/Login";

const LoginContext = createContext<Login | null>(null)

const LoginContextProvider = ({ children }: { children: ReactNode }) => {

    const [usuario, setUsuario] = useState<Usuario>({ email: "", senha: "" })
    const [erro, setErro] = useState(false)

    const login = (email: string, senha: string) => {
        if (email.trim() === "" || senha.trim() === "") {
            setErro(true)
            return Alert.alert("Todos os campos devem ser preenchidos")
        }

        setUsuario({ email, senha })
        return router.push('./(drawer)')
    }

    return (
        <LoginContext.Provider value={{ usuario, erro, login }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginContextProvider }