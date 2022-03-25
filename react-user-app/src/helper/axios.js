import axios from 'axios';
import { api } from '../.urlConfig';


export const axiosInstants = axios.create({

    baseURL: api

});

export default axiosInstants;