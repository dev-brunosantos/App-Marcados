import { Cores, temaClaro } from "@/styles/Cores";
import { createContext, ReactNode, useState } from "react";

interface TemaProps {
    background: string;
    color: string;
}

interface Tema {
    tema: TemaProps;
    alterarTema: ({ background, color }:TemaProps) => void;
}

const TemaContext = createContext<Tema | null>(null)

const TemaContextProvider = ({ children }: { children: ReactNode }) => {

    const [tema, setTema] = useState<TemaProps>(temaClaro)

    const alterarTema = (tema:TemaProps) => {
        return setTema(tema)
    }

    return (
        <TemaContext.Provider value={{ tema, alterarTema }}>
            {children}
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaContextProvider }