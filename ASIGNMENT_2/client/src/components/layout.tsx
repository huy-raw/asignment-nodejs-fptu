import React, { ReactNode } from 'react'
import { NavBar } from './navbar'

interface UserLayoutProps {
    children: ReactNode
}

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex flex-col">
                <NavBar />
                {children}
            </div>
        </>
    )
}