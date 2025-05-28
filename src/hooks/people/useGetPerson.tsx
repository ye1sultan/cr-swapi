import { getPerson } from '@/src/providers/api/services/people';
import { useQuery } from '@tanstack/react-query';

export const useGetPerson = (personId: string) => {
  const { data, isLoading, error } = useQuery({
    enabled: !!personId,
    queryKey: ['person', personId],
    queryFn: () => getPerson(personId),
  });

  return { personData: data, isLoading, error };
};
