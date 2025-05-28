import { Suspense } from 'react';

import { Loader2Icon } from 'lucide-react';

import Home from '@/src/app-pages/home/home';

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Loader2Icon className="animate-spin" />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}
