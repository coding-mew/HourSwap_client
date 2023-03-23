import axios from 'axios';

export const authenticateToken = async () => {
    const BE_URL = import.meta.env.VITE_BE_PORT;
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
    );
    
    try {
        const response = await axios.get(`${BE_URL}/user/validateToken`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
        });
    
        if (response.status === 200) {
        return true;
        }
    } catch (error) {
        console.error(error);
        return false
    }
}