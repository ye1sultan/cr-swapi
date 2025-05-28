'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/src/components/ui/breadcrumb';

interface IBreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface IBreadcrumbsProps {
  items: IBreadcrumbItem[];
}

export function Breadcrumbs({ items }: IBreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <BreadcrumbItem>
              {item.isCurrent || !item.href ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
