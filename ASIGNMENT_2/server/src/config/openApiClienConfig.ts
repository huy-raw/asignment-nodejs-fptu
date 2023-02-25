import OpenAPIClientAxios from 'openapi-client-axios';


export const openAPIClient = async () => {
    const api = new OpenAPIClientAxios({
        definition: '/openapi.json', withServer: 0,
        axiosConfigDefaults: {
            withCredentials: true,
            headers: {
                'Cache-Control': 'no-cache',
            },
        },
    });
    const client = await api.init();

}
