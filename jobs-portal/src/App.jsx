import React, { useState, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const JobDetailsPage = lazy(() => import('./pages/JobDetailsPage'));

export const JobDetailsContext = React.createContext();

const Root = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/details' element={<JobDetailsPage />} />
    </Routes>
  );
};

const router = createBrowserRouter([
  { path: '*', Component: Root },
  // { basename: '/job-portal' },
]);

const App = () => {
  const [category, setCategory] = useState('');
  const [jobId, setJobId] = useState(localStorage.getItem('id'));
  const value = {
    category,
    setCategory,
    jobId,
    setJobId,
  };

  return (
    <Suspense fallback={null}>
      <JobDetailsContext.Provider value={value}>
        <RouterProvider router={router}></RouterProvider>
      </JobDetailsContext.Provider>
    </Suspense>
  );
};

export default App;
