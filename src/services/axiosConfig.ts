import axios from "axios";

export const api = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});