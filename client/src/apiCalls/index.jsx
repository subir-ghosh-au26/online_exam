import axios from 'axios'


const axiosinstance = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export default axiosinstance;