import { FormikErrors, useFormik } from "formik"
import { isEmpty } from 'lodash'
import authService from "../services/authService"


interface FormValues {
    email: string,
    password: string,
    name: string,
    confirmPassword: string
}



const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {}
    if (isEmpty(values.email)) {
        errors.email = "Email is requied"
    }
  
    if (isEmpty(values.password)) {
        errors.password = "Password is requied"
    }
    if (isEmpty(values.name)) {
        errors.name = "Name is requied"
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password must be same with confirm password"
    }
    return errors
}

export const RegisterModal = (props: any) => {
    const handleCloseModal = () => {
        props.handleCloseModal()
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            confirmPassword: ""
        },
        onSubmit: () => {
            authService.register({
                email: formik.values.email,
                password: formik.values.password,
                name: formik.values.name
            }).then((response) => {
                window.sessionStorage.setItem("role", response.data.data.role)
                window.sessionStorage.setItem("isLogged", "true")
                handleCloseModal()
            })
        },
        validate
    })

    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className=" min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <form className="w-full flex justify-center" onSubmit={formik.handleSubmit}>
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Sign up to continue.
                                    </h3>
                                    <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="staticModal">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <div className="mb-3">
                                            <label className="ml-11 font-semibold text-lg">Your Full Name</label>
                                            <label className="flex justify-center">
                                                <input
                                                    className="w-5/6  rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary"
                                                    placeholder="Name"
                                                    type="text"
                                                    name="name"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    minLength={1}
                                                    maxLength={200}
                                                    required
                                                />
                                            </label>
                                            {formik.errors.name && formik.touched.name && <span className="text-tiny ml-11  text-red-500">{formik.errors.email}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="ml-11 font-semibold text-lg">Your Email Address</label>
                                            <label className="flex justify-center">
                                                <input
                                                    className="w-5/6  rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary"
                                                    placeholder="Email"
                                                    type="text"
                                                    name="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    minLength={1}
                                                    maxLength={200}
                                                    required
                                                />
                                            </label>
                                            {formik.errors.email && formik.touched.email && <span className="text-tiny ml-11  text-red-500">{formik.errors.email}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="ml-11 font-semibold text-lg">Your Password</label>
                                            <label className="flex justify-center">
                                                <input
                                                    className="w-5/6 rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary"
                                                    placeholder="Password"
                                                    type="password"
                                                    name="password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    minLength={1}
                                                    maxLength={200}
                                                    required
                                                />
                                            </label>
                                            {formik.errors.password && formik.touched.password && <span className="ml-11 text-tiny text-red-500">{formik.errors.password}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="ml-11 font-semibold text-lg">Confirm Your Password</label>
                                            <label className="flex justify-center">
                                                <input
                                                    className="w-5/6 rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary"
                                                    placeholder="Confirm Password"
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formik.values.confirmPassword}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    minLength={1}
                                                    maxLength={200}
                                                    required
                                                />
                                            </label>
                                            {formik.errors.confirmPassword && formik.touched.confirmPassword && <span className="ml-11 text-tiny text-red-500">{formik.errors.confirmPassword}</span>}
                                        </div>
                                    </div>
                                </form>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button disabled={isEmpty(formik.values.email) || isEmpty(formik.values.password) || isEmpty(formik.values.name) || isEmpty(formik.values.confirmPassword)} name="submit" type="submit" value="Submit" className="mt-3 inline-flex w-full justify-center rounded-md  border-blue-300 bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-slate-500">Create your account</button>
                                    <button onClick={handleCloseModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-blue-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                </div>

                            </div>
                        </form >
                    </div >
                </div >

            </div >

        </>
    )

}