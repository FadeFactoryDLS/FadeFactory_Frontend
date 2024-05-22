import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fadefactoryaccounts.azurewebsites.net/api',
});

export const getAccountById = async (id: string) => {
    const response = await api.get(`/Accounts/${id}`);
    return response.data;
};

export const getAllAccounts = async () => {
    const response = await api.get('/Accounts/getAll');
    return response.data;
};

export const registerAccount = async (account: { firstName: string; email: string; password: string; isPromotional: boolean }) => {
    const response = await api.post('/Accounts/register', account);
    return response.data;
};

export const loginAccount = async (credentials: any) => {
    const response = await api.post('/Register/login', credentials);
    return response.data;
};

export const deleteAccount = async (id: string) => {
    const response = await api.delete(`/Accounts/${id}`);
    return response.data;
};

export const updateAccount = async (id: string, account: any) => {
    const response = await api.put(`/Accounts/${id}`, account);
    return response.data;
};

export default api;