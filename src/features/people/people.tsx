'use client';

import { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useGetPeople } from '@/src/hooks/people/useGetPeople';
import { useDebounce } from '@/src/hooks/useDebounce';

import { PaginationControls } from '@/src/widgets/pagination-controls/pagination-controls';

import { TypographyH2 } from '@/src/components/ui/typography/h2';

import { Header } from './ui/header/header';
import { PeopleList } from './ui/people-list/people-list';
import { PeopleSkeleton } from './ui/people-skeleton/people-skeleton';

export default function People() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page') || '1');
  const gender = searchParams.get('gender') || '';

  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedSearch = useDebounce(searchInput, 500);

  const { peopleData, isLoading, error } = useGetPeople(
    page,
    debouncedSearch,
    gender
  );

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  if (error) return <p>Error loading people</p>;

  const people = peopleData?.results ?? [];
  const totalPages = Math.ceil((peopleData?.count ?? 0) / 10);

  return (
    <>
      <TypographyH2>Characters</TypographyH2>

      <Header
        searchInput={searchInput}
        gender={gender}
        setSearchInput={setSearchInput}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <PeopleSkeleton count={10} />
        ) : (
          <PeopleList people={people} />
        )}
      </div>

      <PaginationControls
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
