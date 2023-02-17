import { useMutation } from "react-query";
import PlayerService from "../services/playerService";

export const PlayerCard = (props: any) => {
    const { data } = props;


    return (
        <>
            <div className=" max-w-xs  bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="pb-5">
                    <img
                        className="rounded-2xl"
                        src={data.image || `https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg`}
                        alt="avatar"
                    />
                </div>
                <div className="flex flex-col items-center pb-10 bg-white">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{data.position}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button type="button" className="w-20 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                        <button type="button" className="w-20 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}