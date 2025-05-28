import { ofetch } from 'ofetch';

export const apiFetch = ofetch.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});
