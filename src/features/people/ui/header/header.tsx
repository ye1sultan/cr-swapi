import { ChangeEvent } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { SearchIcon } from 'lucide-react';

import { Input } from '@/src/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';

interface HeaderProps {
  searchInput: string;
  gender: string;
  setSearchInput: (searchInput: string) => void;
}

export function Header({ searchInput, gender, setSearchInput }: HeaderProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleGenderChange = (newGender: string) => {
    const params = new URLSearchParams(searchParams);
    if (newGender) {
      params.set('gender', newGender);
    } else {
      params.delete('gender');
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex w-full items-center gap-4">
      <div className="relative w-full">
        <Input
          placeholder="Search"
          className="pl-8"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <SearchIcon
          className="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 transform"
          size={16}
        />
      </div>
      <Select value={gender} onValueChange={handleGenderChange}>
        <SelectTrigger className="w-[180px]" defaultValue="all">
          <SelectValue placeholder="Filter by gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="n/a">N/A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
