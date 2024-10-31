import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layouts/defaultLayout';

import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
