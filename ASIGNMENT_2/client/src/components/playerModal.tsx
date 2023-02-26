import { FormikErrors, useFormik } from "formik"
import { isEmpty } from "lodash"
import { useQuery, useQueryClient } from "react-query"
import nationService from "../services/nationService"
import playerService from "../services/playerService"
import { Action, EPosition } from "../utils/types"


interface FormValues {
    name: string,
    image: string,
    club: string,
    position: EPosition,
    goals: number,
    isCaptain: boolean | false,
    nation: string
}

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {}
    if (isEmpty(values.name)) {
        errors.name = "Name is requied!"
    }
    if (isEmpty(values.image)) {
        errors.image = "Image player is requied!"
    }
}

export const PlayerModal = (props: any) => {
    const queryClient = useQueryClient()
    const data = props.data
    const type = props.type
    const { data: dataNations, isFetching: loadingNation } = useQuery('getListNations', nationService.findAll);


    const nations: any = dataNations?.data

    const handleCloseModal = () => {
        props.handleCloseModal()
    }

    const formik = useFormik({
        initialValues: {
            name: data?.name || '',
            image: data?.image || '',
            club: data?.club || '',
            position: data?.club || '',
            goals: data?.goals || 0,
            isCaptain: data?.isCaptian || false,
            nation: data?.nation || ''
        },
        onSubmit: () => {
            if (type === Action.CREATE) {
                playerService.createPlayer(formik.values).then(() => {
                    queryClient.invalidateQueries('getListPlayer')
                    handleCloseModal()
                })
            }
            if (type === Action.UPDATE) {
                playerService.updatePlayer(formik.values, data._id).then(() => {
                    queryClient.invalidateQueries('getListPlayer')
                    handleCloseModal()
                })
            }
        },
        validate
    })

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className=" min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <form className="w-full flex justify-center" onSubmit={formik.handleSubmit}>
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="flex items-start justify-between p-2 ml-2 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    PLAYER MODAL
                                </h3>
                                <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="staticModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="bg-white px-6">
                                    <div>
                                        <div className="mt-3">
                                            <label htmlFor="name" className="block mb-2 text-lg font-medium text-black">Player name</label>
                                            <input
                                                value={formik.values.name} required
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange} name="name" type="text" id="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                                            {formik.errors.name && formik.touched.name && <span className="text-tiny text-red-500">{formik.errors.name}</span>}

                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="club" className="block mb-2 text-lg font-medium text-black">Club Name Now</label>
                                            <input
                                                value={formik.values.club} required
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange} name="club"
                                                type="text" id="club"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " />
                                            {formik.errors.club && formik.touched.club && <span className="text-tiny text-red-500">{formik.errors.club}</span>}

                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="image" className="block mb-2 text-lg font-medium text-black">Image Player</label>
                                            <input
                                                value={formik.values.image} required
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="image"
                                                id="image"
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                                            {formik.errors.image && formik.touched.image && <span className="text-tiny text-red-500">{formik.errors.image}</span>}

                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="isCaptain" className="text-lg font-medium text-black">This player is captian now</label>
                                            <div className="flex justify-around" >
                                                <div className="flex items-center px-10 border border-gray-300 rounded mt-3 ">
                                                    <input
                                                        defaultChecked
                                                        value="false"
                                                        onChange={formik.handleChange}
                                                        name="isCaptain"
                                                        type="radio"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                                    <label htmlFor="isCaption" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                                                        Not a captain
                                                    </label>
                                                </div>
                                                <div className="flex items-center px-10 border border-gray-300 rounded mt-3 ">
                                                    <input
                                                        value="true"
                                                        onChange={formik.handleChange}
                                                        name="isCaptain"
                                                        type="radio"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                                    <label htmlFor="isCaption" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">
                                                        Is a captain
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="goals" className="block mb-2 text-lg font-medium text-black">Goal in life</label>
                                            <input
                                                value={formik.values.goals}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                name="goals"
                                                id="goals"
                                                min={0}
                                                type="number" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" />
                                        </div>
                                        <div className="flex flex-1 mt-3">
                                            <div className="">
                                                <label htmlFor="position" className="mb-2 text-lg font-medium text-black">Position</label>
                                                <select value={formik.values.position} name="position" id="position" onChange={formik.handleChange} className="ml-4 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                                                    <option value={EPosition.DEFENDERS} defaultValue={EPosition.DEFENDERS}>Defenders</option>
                                                    <option value={EPosition.FORWARD}>Forward</option>
                                                    <option value={EPosition.GOALKEEPER}>Goalkeeper</option>
                                                    <option value={EPosition.MIDFIELDERS}>Midfielders</option>
                                                </select>
                                            </div>
                                            <div className="ml-5">
                                                <label htmlFor="nation" className="mb-2 ml-2 text-lg font-medium text-black ">National</label>
                                                <select name="nation" id="nation" onChange={formik.handleChange} className="p-2 mb-6 text-sm ml-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                                                    {nations && nations.map((nation: any) => {
                                                        return (
                                                            <option className="bg-gray-100 border text-sm " key={nation._id} value={nation._id} >{nation.name}</option>
                                                        )
                                                    })

                                                    }
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div className="bg-gray-50 pb-3 sm:flex sm:flex-row-reverse sm:pr-6">
                                <button disabled={!formik.dirty || !!formik.errors} type="submit" value="Submit" className="mt-3 inline-flex w-full justify-center rounded-md border border-blue-300 bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-500 disabled:bg-slate-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" >Save</button>
                                <button onClick={handleCloseModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-blue-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </form >
                </div >
            </div >

        </div >
    )
}