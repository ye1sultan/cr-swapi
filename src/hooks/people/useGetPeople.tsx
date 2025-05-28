import { getPeople } from '@/src/providers/api/services/getPeople';
import { useQuery } from '@tanstack/react-query';

export const useGetPeople = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['people'],
    queryFn: getPeople,
  });

  return { people: data, isLoading, error };
};
