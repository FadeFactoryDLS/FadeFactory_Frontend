import axios from 'axios';
import { API_URLS } from '../constants';

const { ACCOUNTS_API_URL, BOOKINGS_API_URL } = API_URLS;
const api = axios.create({
    baseURL: 'https://fadefactoryaccounts.azurewebsites.net/api',
});


export const loginAccount = async (credentials: { FirstName: string, email: string; password: string }) => {
    const response = await axios.post(`${ACCOUNTS_API_URL}/login`, credentials);
    return response.data;
};

export const registerAccount = async (account: { firstName: string; email: string; password: string; isPromotional: boolean }) => {
    const response = await axios.post(`${ACCOUNTS_API_URL}/register`, account);
    return response.data;
};

export const getAccountById = async (id: string) => {
    const response = await api.get(`/Accounts/${id}`);
    return response.data;
};

export const getAllAccounts = async () => {
    const response = await api.get('/Accounts/getAll');
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