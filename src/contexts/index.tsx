import { createContext, ReactNode } from "react";
import { LoginContextProvider } from "./LoginContext";
import { TemaContextProvider } from "./TemaContext";

const AppContexts = ({ children }: { children: ReactNode }) => {
    return (
        <TemaContextProvider>
            <LoginContextProvider>
                {children}
            </LoginContextProvider>
        </TemaContextProvider>
    )
}

export { AppContexts }