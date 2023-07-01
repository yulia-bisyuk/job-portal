import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

const router = createBrowserRouter([{ path: '*', Component: Root }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
