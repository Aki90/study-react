import { MemoryRouter, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function withRouter(
  routes: React.ReactElement,
  initialEntry = '/',
): React.ReactElement {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}

export function wrapper(children: React.ReactElement) {
  const testClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
  );
}

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      error: () => {},
    },
  });
}
