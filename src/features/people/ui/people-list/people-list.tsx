import { IPerson } from '@/src/types/person';

import { PeopleCard } from './ui/people-card/people-card';

export function PeopleList({ people }: { people: IPerson[] }) {
  if (people.length === 0) return <div>No characters found :(</div>;

  return (
    <>
      {people.map((person: IPerson, index: number) => (
        <PeopleCard key={index} index={index} person={person} />
      ))}
    </>
  );
}
