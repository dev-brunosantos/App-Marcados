import { TemaContext } from "@/contexts/TemaContext"
import { useContext } from "react"

export const useTema = () => {
    const contexto = useContext(TemaContext)
    if(!contexto) throw new Error("Não foi encontrado nenhum contexto de TEMA")
    return contexto
}