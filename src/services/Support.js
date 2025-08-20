export const API_BASE_URL = import.meta.env.VITE_API_URL + "/api/v1/";

export function getHeaders(userId) {
    return {
        "X-User-Id": userId,
    };
}