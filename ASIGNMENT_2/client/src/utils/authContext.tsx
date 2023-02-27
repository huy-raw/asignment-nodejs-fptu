import React, { useState } from 'react';
import { ReactNode } from 'react';

export type AuthContextType = {
    isLogged: boolean,
    login: () => void,
    logout: () => void,
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }) => {
    const [isLogged, setLogged] = useState(false)
    const handleLogin = () => {
        setLogged(true)
    }

    const handleLogout = () => {
        setLogged(false)
    }
    return (
        <AuthContext.Provider value={{
            isLogged: isLogged,
            login: handleLogin,
            logout: handleLogout,
        }}>
            {children}
        </AuthContext.Provider >
    )
}


export default AuthContextProvider