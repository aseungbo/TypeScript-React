import instance from './axios.instance';

const axiosSingleUserUrl = 'api/users/2'
export const axiosSingleUser = async () => {
    try {
        const response = await instance.get(axiosSingleUserUrl);
        return response;
    } catch (err) {
        throw console.error(err);
    }
}