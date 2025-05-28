import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IPerson } from '@/src/types/person';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { TypographyMuted } from '@/src/components/ui/typography/muted';

interface PeopleCardProps {
  index: number;
  person: IPerson;
}

export function PeopleCard({ index, person }: PeopleCardProps) {
  const router = useRouter();

  const personId = person.url.split('/')[5];
  const imageUrl = personId ? `/people/${personId}.jpg` : '/people/1.jpg';

  const handleClick = () => {
    const params = new URLSearchParams(window.location.search);
    params.set('person', personId);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Card
        key={index}
        className="group flex cursor-pointer flex-col gap-4"
        onClick={handleClick}
      >
        <div className="w-full overflow-hidden px-4">
          <Image
            src={imageUrl}
            alt={person.name}
            width={500}
            height={500}
            className="h-[400px] w-full rounded-lg object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="underline-offset-2 group-hover:text-blue-500 group-hover:underline">
            {person.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-5">
          <TypographyMuted>Height: {person.height}</TypographyMuted>
          <TypographyMuted>Gender: {person.gender}</TypographyMuted>
          <TypographyMuted>Birth year: {person.birth_year}</TypographyMuted>
          <TypographyMuted>Birth year: {person.birth_year}</TypographyMuted>
        </CardContent>
      </Card>
    </>
  );
}
