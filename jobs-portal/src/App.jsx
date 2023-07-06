import React, { useState, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));

export const JobDetailsContext = React.createContext();

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
};

const router = createBrowserRouter([{ path: '*', Component: Root }]);

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
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </JobDetailsContext.Provider>
    </Suspense>
  );
};

export default App;
