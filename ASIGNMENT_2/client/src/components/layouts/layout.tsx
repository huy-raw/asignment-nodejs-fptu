import React, { ReactNode } from 'react'
import { NavBar } from '../navbar/navbar.component';

interface UserLayoutProps {
    children: ReactNode
}

export const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <NavBar />
                </div>
                <div className="flex">
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}