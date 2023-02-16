import React from "react"
import {
    useQuery, useMutation, useQueryClient,
} from 'react-query'
import NationService from "../services/NationService"

export const Nation: React.FC = () => {
    const { data: nations, isLoading: loadingNation } = useQuery('nations', NationService.findAll);

    console.log(nations);
    return (
        <>
            <h1>nation</h1>
        </>
    )
}