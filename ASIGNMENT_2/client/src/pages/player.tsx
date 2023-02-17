import React, { useState } from "react"
import { useQuery } from "react-query";
import { PlayerCard } from "../components/playerCard"
import { SpinerCustom } from "../components/spiner";
import playerService from "../services/playerService";


export const Player: React.FC = () => {
    const { data: dataPlayer, isFetching: loadingPlayer} = useQuery('nations', playerService.findAll);
    if (loadingPlayer) {
        return <></>
    }

    const players: any = dataPlayer.data
   console.log(players);

    return (
        <div className="">
            <div className="px-4 py-3 sm:flex sm:flex-row sm:px-6">
                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Create</button>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mx-20 ">
                {
                    players.map((player: any, index: any) => {
                        return <PlayerCard key={index} data={player} handleOpenModal={null} />
                    })
                }
            </div>
        </div>
    )
}