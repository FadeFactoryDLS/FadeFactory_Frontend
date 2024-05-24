export const API_URLS = {
    ACCOUNTS_API_URL: import.meta.env.VITE_ACCOUNTS_API as string,
    BOOKINGS_API_URL: import.meta.env.VITE_BOOKINGS_API as string,
};

export const CLAIMS = {
    ROLE: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    EMAIL: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
} as const;