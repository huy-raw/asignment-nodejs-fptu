import { create } from "zustand";
import { axiosConfig } from "../utils/axiosClient";
import { INation } from "../utils/types";


const nationState = {
    data: [],
    loading: false,
    error: undefined
}

export  const nationStore = (set: any, get: any) => {
    return {
        nationState,
        getNations: async () => {
            set(
                (state: any) => {
                    state.nationState.loading = true
                },
                false,
                `nations/fetch_request`
            )
            try {
                const res = await axiosConfig.get(`/nations`)
                set(
                    (state: any) => {
                        state.nationState.loading = false;
                        state.nationState.data = res.data;
                    },
                    false,
                    `users/fetch_success`
                )
            } catch (error) {
                set(
                    (state: any) => {
                        state.userState.loading = false;
                        state.userState.data = error;
                    },
                    false,
                    `nations/fetch_errors`
                )
            }
        },
    }
}