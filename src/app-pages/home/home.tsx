import People from '@/src/features/people/people';

import { Breadcrumbs } from '@/src/widgets/breadcrumbs/breadcrumbs';

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 p-4">
      <Breadcrumbs items={[{ label: 'Catalogue', href: '/' }]} />
      <People />
    </div>
  );
}
