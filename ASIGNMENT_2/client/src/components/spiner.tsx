import React from "react";

export const Spiner: React.FC = () => {
    return (
        <div className="spinner is-elastic h-16 w-16 animate-spin text-info fl justify-center">
            <div className="spinner is-grow relative h-7 w-7">
                <span
                    className="absolute inline-block h-full w-full rounded-full bg-error opacity-75"
                ></span>
                <span
                    className="absolute inline-block h-full w-full rounded-full bg-error opacity-75"
                ></span>
            </div>
        </div>
    )
}