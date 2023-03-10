import { FormikErrors, useFormik } from 'formik';
import { isEmpty } from 'lodash';
import { useContext } from 'react';
import { useQueryClient } from 'react-query';
import nationService from '../services/nationService';
import { AuthContext, AuthContextType } from '../utils/authContext';
import { Action } from '../utils/types';


interface FormValues {
    name: string,
    description: string,
    image: string
}

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {}
    if (isEmpty(values.name)) {
        errors.name = "Nation name is requied"
    }
    if (isEmpty(values.description)) {
        errors.description = "Description is requied"
    }
    if (isEmpty(values.image)) {
        errors.image = "Image is requied"
    }

    return errors
}

export const NationModal = (props: any) => {
    const queryClient = useQueryClient()
    const data = props.data ?? null
    const type = props.type
    const handleCloseModal = () => {
        if (type === Action.CREATE) {
            props.handleCloseModal()
        }
        if (type === Action.UPDATE) {
            props.handleCloseModal()
        }
    }
    const { isLogged, login, logout } = useContext(AuthContext) as AuthContextType

    const formik = useFormik({
        initialValues: {
            name: data?.name || "",
            description: data?.description || "",
            image: data?.image || ""
        },
        onSubmit: () => {
            if (type === Action.CREATE) {
                nationService.createNation(formik.values).then(() => {
                    queryClient.invalidateQueries('getListNations')
                    handleCloseModal()
                })
            }
            if (type === Action.UPDATE) {
                nationService.updateNation(formik.values, data._id).then(() => {
                    queryClient.invalidateQueries('getListNations')
                    handleCloseModal()
                })
            }
        },
        validate
    })

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out"></div>
            <div className="fixed inset-0  overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <form className="w-full flex justify-center" onSubmit={formik.handleSubmit}>
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    NATION MODAL
                                </h3>
                                <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Nation name</label>
                                        <input
                                            required
                                            value={formik.values.name}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange} name="name" type="text" id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        {formik.errors.name && formik.touched.name && <span className="text-tiny text-red-500">{formik.errors.name}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                        <input
                                            required
                                            value={formik.values.description}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange} name="description"
                                            type="text" id="description"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                                        {formik.errors.description && formik.touched.description && <span className="text-tiny  text-red-500">{formik.errors.description}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="plagImg" className="block mb-2 text-sm font-medium text-black">Image</label>
                                        <input
                                            required
                                            value={formik.values.image}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name="image"
                                            id="image"
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        {formik.errors.image && formik.touched.image && <span className="text-tiny text-red-500">{formik.errors.image}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button disabled={isEmpty(formik.values.description) || isEmpty(formik.values.name) || isEmpty(formik.values.image)} type="submit" className="mt-3 inline-flex w-full justify-center rounded-md border border-blue-300 bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-slate-400" >Save</button>
                                <button onClick={handleCloseModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-blue-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}