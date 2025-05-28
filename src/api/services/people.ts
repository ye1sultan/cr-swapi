import { IPaginatedResponse } from '@/src/types/paginated-response';
import { IPerson } from '@/src/types/person';

export const getPeople = async (
  page: number = 1,
  search: string,
  gender: string
): Promise<IPaginatedResponse<IPerson>> => {
  const query = new URLSearchParams();
  query.set('page', page.toString());
  if (search) query.set('search', search);
  if (gender) query.set('gender', gender);

  const res = await fetch(`/api/swapi/people?${query.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch people');
  return res.json();
};

export const getPerson = async (personId: string): Promise<IPerson> => {
  const res = await fetch(`/api/swapi/people/${personId}`);
  if (!res.ok) throw new Error('Failed to fetch person');
  return res.json();
};
