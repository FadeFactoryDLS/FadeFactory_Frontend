import axios from 'axios';
import { API_URLS } from '../constants';

const { ACCOUNTS_API_URL, BOOKINGS_API_URL } = API_URLS;

export const loginAccount = async (credentials: { FirstName: string, email: string; password: string }) => {
    const response = await axios.post(`${ACCOUNTS_API_URL}/login`, credentials);
    return response.data;
};

export const registerAccount = async (account: { firstName: string; email: string; password: string; isPromotional: boolean }) => {
    const response = await axios.post(`${ACCOUNTS_API_URL}/register`, account);
    return response.data;
};

export const getAccountById = async (id: string) => {
    const response = await axios.get(`${ACCOUNTS_API_URL}/Accounts/${id}`);
    return response.data;
};

export const getAllAccounts = async () => {
    const response = await axios.get(`${ACCOUNTS_API_URL}/Accounts/getAll`);
    return response.data;
};

export const deleteAccount = async (id: string) => {
    const response = await axios.delete(`${ACCOUNTS_API_URL}/Accounts/${id}`);
    return response.data;
};

export const updateAccount = async (id: string, account: any) => {
    const response = await axios.put(`${ACCOUNTS_API_URL}/Accounts/${id}`, account);
    return response.data;
};

export default {
    loginAccount,
    registerAccount,
    getAccountById,
    getAllAccounts,
    deleteAccount,
    updateAccount,
};