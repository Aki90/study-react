import { Outlet } from 'react-router-dom';

function Header() {
  return <header>Header</header>;
}

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
