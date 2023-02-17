import React, { useState } from "react"
import { useQuery } from "react-query";
import { PlayerCard } from "../components/playerCard"
import { PlayerModal } from "../components/playerModal";
import { SpinerCustom } from "../components/spiner";
import playerService from "../services/playerService";
import { Action } from "../utils/types";


export const Player: React.FC = () => {
    const [isShowModal, setShowModal] = useState(false)
    const { data: dataPlayer, isFetching: loadingPlayer } = useQuery('getListPlayer', playerService.findAll);
    if (loadingPlayer) {
        return <></>
    }

    const players: any = dataPlayer.data
    console.log(players);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }


    return (
        <div className="">
            <div className="px-10 my-10 sm:flex sm:flex-row sm:px-6">
                <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={handleShowModal} type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" >Create</button>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mx-20 ">
                {
                    players.map((player: any, index: any) => {
                        return <PlayerCard key={index} data={player} handleOpenModal={null} />
                    })
                }
            </div>
            <div className="items-center">
                {isShowModal ? <PlayerModal handleCloseModal={handleCloseModal} type={Action.CREATE} /> : <></>}
            </div>
        </div>
    )
}