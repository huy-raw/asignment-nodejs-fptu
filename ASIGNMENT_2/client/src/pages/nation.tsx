import React, { useState } from "react"
import { useQuery } from 'react-query'
import { NationCard } from "../components/nationCard";
import { Spiner } from "../components/spiner";
import NationService from "../services/nationService";
;

export const Nation: React.FC = () => {
    const { data: dataNations, isFetching: loadingNation } = useQuery('getListNations', NationService.findAll);
    if (loadingNation) {
        return <Spiner/>
    }

    const nations: any = dataNations?.data.data
    return (
        <div className="pb-10">
            <div className="px-4 py-3 sm:flex sm:flex-row sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" >Create</button>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mx-20 ">
                {
                    nations.map((nation: any, index: any) => {
                        return <NationCard key={index} data={nation} handleOpenModal={null} />
                    })
                }
            </div>

        </div>
    )
}