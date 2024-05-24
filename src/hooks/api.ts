import axios from 'axios';
import { API_URLS } from '../constants';

const { ACCOUNTS_API_URL, BOOKINGS_API_URL } = API_URLS;

const getToken = () => {
    return localStorage.getItem('token');
};

export const loginAccount = async (credentials: { firstName: string, email: string; password: string }) => {
    const response = await axios.post(`${ACCOUNTS_API_URL}/login`, credentials);
    return response.data;
};

export const registerAccount = async (account: { firstName: string; email: string; password: string; isPromotional: boolean }) => {
    const response = await axios.post(`${ACCOUNTS_API_URL}/register`, account);
    return response.data;
};

export const getAccountById = async (id: string) => {
    const response = await axios.get(`${ACCOUNTS_API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

export const getAllAccounts = async () => {
    const response = await axios.get(`${ACCOUNTS_API_URL}/getAll`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

export const deleteAccount = async (id: string) => {
    const response = await axios.delete(`${ACCOUNTS_API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

export const updateAccount = async (account: { accountId: string, firstName: string; email: string; isPromotional: boolean, isAdmin: boolean }) => {
    const response = await axios.put(`${ACCOUNTS_API_URL}`, account, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

export const getAppointments = async () => {
    const response = await axios.get(`${BOOKINGS_API_URL}/GetAll`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

export const bookAppointment = async (timeslot: Date) => {
    const email = localStorage.getItem('userEmail');
    const response = await axios.post(`${BOOKINGS_API_URL}`, {
        email,
        timeslot: timeslot.toISOString()
    }, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};


export default {
    loginAccount,
    registerAccount,
    getAccountById,
    getAllAccounts,
    deleteAccount,
    updateAccount,
    getAppointments,
    bookAppointment,
};