

const getAuthToken = () => {
    const token = localStorage.getItem('token');
    return token;
};

export const getAuthUser = () => {
    const user = localStorage.getItem('user');
    return user;
}

export default getAuthToken;
