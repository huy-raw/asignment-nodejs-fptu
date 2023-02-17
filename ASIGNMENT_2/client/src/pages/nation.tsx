import React, { useState } from "react"
import { useMutation, useQuery } from 'react-query'

import { NationCard } from "../components/nationCard";
import { NationModal } from "../components/nationModal";
import nationService from "../services/nationService";
import { Action } from "../utils/types";



export const Nation = () => {
    const [isShowModal, setShowModal] = useState(false)
    const { data: dataNations, isFetching: loadingNation } = useQuery('getListNations', nationService.findAll);

    if (loadingNation) {
        return <></>
    }
    const nations: any = dataNations?.data

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }



    return (

        <div className="pb-10 ">
            <div className="px-10 my-10 sm:flex sm:flex-row sm:px-6">
                <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={handleShowModal} type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" >Create</button>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 mx-20">
                {
                    nations.map((nation: any, index: any) => {
                        return <NationCard key={index} data={nation} handleOpenModal={null} />
                    })
                }
            </div>
            <div className="items-center">
                {isShowModal ? <NationModal handleCloseModal={handleCloseModal} type={Action.CREATE} /> : <></>}
            </div>
        </div>
    )
}