import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import SearchHeader from '@/components/SearchHeader/SearchHeader';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchHeader />

      <Routes>
        <Route path="/" element={<Videos />}>
          <Route path="videos/:keyword" element={<Videos />} />
          <Route path="videos/watch/:videoId" element={<VideoDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
