import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Statistics from './components/Statistics';

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
};

const router = createBrowserRouter([{ path: '*', Component: Root }]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Statistics />
      <Footer />
    </>
  );
};

export default App;
