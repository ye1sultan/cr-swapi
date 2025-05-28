'use client';

import { cn } from '@/src/lib/utils';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/src/components/ui/pagination';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const getPageNumbers = (totalPages: number, currentPage: number) => {
  const pages: (number | string)[] = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);
  }

  return pages;
};

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const pages = getPageNumbers(totalPages, currentPage);

  return (
    <Pagination className="mx-0 w-fit self-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className={cn(
              'cursor-pointer',
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            )}
          />
        </PaginationItem>
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange(page)}
                size="icon"
                className={cn('cursor-pointer', page > 999 ? 'px-4' : '')}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className={cn(
              'cursor-pointer',
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
