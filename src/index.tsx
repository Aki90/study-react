import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Videos from '@/pages/Videos/Videos';
import VideoDetail from '@/pages/VideoDetail';
import SearchHeader from '@/components/SearchHeader/SearchHeader';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchHeader />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/videos/:keyword" element={<Videos />} />
          <Route path="/videos/watch/:videoId" element={<VideoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
