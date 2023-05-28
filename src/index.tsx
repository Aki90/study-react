import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Videos from '@/pages/Videos/Videos';
import VideoDetail from '@/pages/VideoDetail/VideoDetail';
import SearchHeader from '@/components/SearchHeader/SearchHeader';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <SearchHeader />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Videos />} />
          <Route path="/videos/:keyword" element={<Videos />} />
          <Route path="/videos/watch/:videoId" element={<VideoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
