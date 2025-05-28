'use client';

import Image from 'next/image';

import { useGetPerson } from '@/src/hooks/people/useGetPerson';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { TypographyMuted } from '@/src/components/ui/typography/muted';

import { PersonModalSkeleton } from './person-modal-skeleton';

interface PersonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  personId: string | number | null;
}

export function PersonModal({
  open,
  onOpenChange,
  personId,
}: PersonModalProps) {
  const { personData, isLoading, error } = useGetPerson(personId as string);

  if (!personId) return null;

  const imageUrl = personId ? `/people/${personId}.jpg` : '/people/1.jpg';

  if (error) return <div>Error</div>;
  if (!personData) return null;

  const person = personData;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        {isLoading ? (
          <PersonModalSkeleton />
        ) : (
          <>
            <Image
              src={imageUrl}
              alt={person.name}
              width={400}
              height={400}
              className="mb-4 h-[400px] w-full rounded-lg object-cover"
            />
            <DialogHeader>
              <DialogTitle>{person.name}</DialogTitle>
            </DialogHeader>
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <TypographyMuted>Height:</TypographyMuted> {person.height}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TypographyMuted>Mass:</TypographyMuted> {person.mass}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TypographyMuted>Eye Color:</TypographyMuted> {person.eye_color}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
