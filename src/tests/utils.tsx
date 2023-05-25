import { MemoryRouter, Routes } from 'react-router-dom';

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
