import axios from 'axios';
import { API_URL } from '@/config/endpoints'

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic YWRtaW46MkEraGpzaEpMRVtHS1N6W2x0IyN3c2tmdzg3c2Zrc2ZGU1dQR01IRCEk',
}

interface Response<T> {
    data: T;
    status: number;
    headers: any[];
}

export const paramsObjectToQueryParams = (params?: { [x: string]: any } | null) => (
    params ? Object.keys(params).reduce((query, key, index) => {
        const prefix = index === 0 ? '?' : '&';
        return `${query}${prefix}${key}=${params[key]}`;
    }, '') : ''
);
export const get = async <T>(path: string, params?: { [x: string]: any } | null, overrideEndPoints?: string, headers?: Object): Promise<Response<T>> => {
    const query = paramsObjectToQueryParams(params);
    const uri = (overrideEndPoints ? overrideEndPoints : API_URL) + path + query;
    const response = await axios.get(uri, { headers: headers? headers: defaultHeaders });
    const { status, data } = response;
    return { status, data, headers: response.headers || [] };
}

export const post = async <T>(path: string, payload?: { [x: string]: any } | null, overrideEndPoints?: string, headers?: Object): Promise<Response<T>> => {
    const uri = (overrideEndPoints ? overrideEndPoints : API_URL) + path;
    const response = await axios.post(uri, payload, {
        headers: {
            ...defaultHeaders,
            ...headers,
        }
    });
    const { status, data } = response;
    return { status, data, headers: response.headers || [] };
}

export type APIResponse = [string, number];