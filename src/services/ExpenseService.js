import axios from "axios";
import { getHeaders, API_BASE_URL } from "./Support";
import { useMutation, useQuery } from "@tanstack/react-query";

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const addIncome = (data, userId) => {
    return api.post("income/", data, { headers: getHeaders(userId) });
}

export function useAddIncome(userId) {
    return useMutation({
        mutationFn: (data) => addIncome(data, userId),
    });
}

// Add Expense
export function addExpense(data, userId) {
    return api.post("expense/", data, { headers: getHeaders(userId) });
}

export function useAddExpense(userId) {
    return useMutation({
        mutationFn: (data) => addExpense(data, userId),
    });
}

// Get Summary
export function getSummary(userId, year = new Date().getFullYear()) {
    return api.get(`summary?year=${year}`, { headers: getHeaders(userId) });
}

export const useGetSummary = (userId) => {
    return useQuery({
        queryKey: ["summary", userId],
        queryFn: () => getSummary(userId).then(res => res.data),
        enabled: !!userId,
    });
}