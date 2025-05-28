import { getPeople } from '@/src/api/services/people';
import { useQuery } from '@tanstack/react-query';

export const useGetPeople = (page: number, query: string, gender: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['people', page, query, gender],
    queryFn: () => getPeople(page, query, gender),
  });

  return { peopleData: data, isLoading, error };
};
