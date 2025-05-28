'use client';

import { TypographyH2 } from '@/src/components/ui/typography/h2';
import { useGetPeople } from '@/src/hooks/people/useGetPeople';

export default function People() {
  const { people, isLoading, error } = useGetPeople();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading people</p>;

  console.log(people);

  return (
    <>
      <TypographyH2>People</TypographyH2>
    </>
  );
}
