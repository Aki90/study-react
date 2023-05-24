import { Outlet } from 'react-router-dom';
import SearchHeader from '@/components/SearchHeader/SearchHeader';

export default function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}
