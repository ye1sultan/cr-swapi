import { apiFetch } from '../api';

export const getPeople = async () => {
  const res = await apiFetch('/people');
  return res.results;
};
