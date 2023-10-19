'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

export default function TanStackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [useQuery] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={useQuery}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
