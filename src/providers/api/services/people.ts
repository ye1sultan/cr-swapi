import { IPaginatedResponse } from '@/src/types/paginated-response';
import { IPerson } from '@/src/types/person';

import { apiFetch } from '../api';

export const getPeople = async (
  page: number = 1,
  search: string,
  gender: string
) => {
  const query = new URLSearchParams();
  query.set('page', page.toString());
  if (search) query.set('name', search);
  if (gender) query.set('gender', gender);

  const res = await apiFetch(`/people?${query.toString()}`);
  return res as IPaginatedResponse<IPerson>;
};

export const getPerson = async (personId: string) => {
  const res = await apiFetch(`/people/${personId}`);
  return res as IPerson;
};
