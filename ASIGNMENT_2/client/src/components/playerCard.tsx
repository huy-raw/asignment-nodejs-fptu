import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextType } from "../utils/authContext";
import { Action, TypeData } from "../utils/types";
import { ConfirmModal } from "./confirmModal";
import { PlayerModal } from "./playerModal";


export const PlayerCard = (props: any) => {
    const { data } = props;
    const [isShowModalDelete, setShowModalDelete] = useState(false)
    const [isShowModalUpdate, setShowModalUpdate] = useState(false)
    const { isLogged} = useContext(AuthContext) as AuthContextType

    const handleShowModalDelete = () => {
        setShowModalDelete(true)
    }

    const handleCloseModalDelete = () => {
        setShowModalDelete(false)
    }
    const handleShowModal = () => {
        setShowModalUpdate(true)
    }

    const handleCloseModal = () => {
        setShowModalUpdate(false)
    }

    const isAdmin = () => {
        return window.sessionStorage.getItem("role")
    }
    useEffect(() => {
        isAdmin()
    }, [isLogged])

    return (
        <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow ">
                <div className="m-auto flex justify-center">
                    <img
                        className=" object-fill rounded-2xl"
                        src={data.image || `https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg`}
                        alt="avatar"
                    />
                </div>
                <div className="flex flex-col items-center mb-5 bg-white">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                    <p className="mb-1 text-base font-medium text-gray-900 dark:text-white">{data.position}</p>
                    <p className="mb-1 text-base font-medium text-gray-900 dark:text-white">{data.club}</p>
                    <div className="flex mt-4 space-x-3 ">
                        {isAdmin() && <button onClick={handleShowModal} type="button" className="w-20 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</button>}
                        {isAdmin() && <button onClick={handleShowModalDelete} type="button" className="w-20 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Delete</button>}
                        {!isAdmin() && <button type="button" className="w-auto px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">View detail</button>}
                    </div>
                    <div className="items-center ">
                        {isShowModalDelete && <ConfirmModal type={TypeData.PLAYER} handleCloseModal={handleCloseModalDelete} id={data._id} />}
                        {isShowModalUpdate ? <PlayerModal handleCloseModal={handleCloseModal} data={data} type={Action.UPDATE} id={data._id} /> : <></>}
                    </div>
                </div>
            </div>
        </a>
    )
}