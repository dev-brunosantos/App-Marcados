import { createContext, ReactNode } from "react";
import { LoginContextProvider } from "./LoginContext";

const AppContexts = ({ children }: { children: ReactNode }) => {
    return (
        <LoginContextProvider>
            {children}
        </LoginContextProvider>
    )
}

export { AppContexts }