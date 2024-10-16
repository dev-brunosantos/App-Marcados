import { LoginContext } from "@/contexts/LoginContext"
import { useContext } from "react"

export const useLogin = () => {
    const contexto = useContext(LoginContext)
    if (!contexto) throw new Error("Não encontramos nenhum contexto de login")
    return contexto
}