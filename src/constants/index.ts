import getEnvVars from '../../environment';

const env = getEnvVars();

export const API_URL = env.apiUrl;

export const PAGE_LIMIT = 12;
export const PAGE = 1;