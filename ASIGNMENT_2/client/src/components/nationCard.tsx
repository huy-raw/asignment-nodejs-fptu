import { useState } from "react";
import { Action, TypeData } from "../utils/types";
import { ConfirmModal } from "./confirmModal";
import { NationModal } from "./nationModal";


export const NationCard = (props: any) => {
    const [isShowModalDelete, setShowModalDelete] = useState(false)
    const [isShowModalUpdate, setShowModalUpdate] = useState(false)

    const { data } = props;

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


    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-full mt-5 m-auto h-60 w-64" src={data.plagImg ?? "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"} alt="" />
                </div>
                <div className="px-5 pt-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{data.description}</p>

                </div>

                <div className="flex flex-col justify-end items-center bg-white mb-4">
                    <div className="flex mt-4 space-x-3 md:mt-6 ">
                        <button onClick={handleShowModal} type="button" className="w-20 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                        <button onClick={handleShowModalDelete} type="button" className="w-20 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                    </div>
                </div>
                <div className="items-center">
                    {isShowModalDelete && <ConfirmModal type={TypeData.PLAYER}  handleCloseModal={handleCloseModalDelete} id={data._id} />}
                    {isShowModalUpdate ? <NationModal handleCloseModal={handleCloseModal} data={data} type={Action.UPDATE} /> : <></>}
                </div>
            </div>

        </>
    )
}