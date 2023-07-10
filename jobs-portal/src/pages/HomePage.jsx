import { useEffect, useState, useContext, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { JobDetailsContext } from '../App';
import axios from 'axios';
import Hero from '../components/Hero';
import JobList from '../components/JobList';
import Partners from '../components/Partners';
import PopularCategories from '../components/PopularCategories';
import Statistics from '../components/Statistics';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BASE_URL } from '../constants/index';
import Loader from '../components/Loader';
import Error from '../components/Error';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalJobsCount, setTotalJobsCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? '1';
  const [error, setError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  const { category } = useContext(JobDetailsContext);
  const categoryParam = category ? `category=${category}` : null;
  const ref = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}?${categoryParam}&page=${currentPage}`)
      .then((res) => {
        console.log('res', res.data);
        if (res.data.results.length !== 0) {
          setJobs(res.data.results);
          setTotalPages(res.data.page_count);
          setItemsPerPage(res.data.items_per_page);
          setTotalJobsCount(res.data.total);
          // setSuccess(true);
          setDataError(false);
          // setError(false);
        } else {
          setDataError(true);
          // setError(true);
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage, categoryParam]);

  return (
    <>
      <Header />

      <Hero ref={ref} />
      <Partners />
      <PopularCategories ref={ref} />
      {isLoading && <Loader />}
      {error && <Error text='Oops... Something went wrong' />}
      {dataError ? (
        <Error text='There is no data for your request.' />
      ) : (
        <JobList
          jobs={jobs}
          setSearchParams={setSearchParams}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalJobsCount={totalJobsCount}
          ref={ref}
        />
      )}
      <Statistics />
      <Footer />
    </>
  );
};

export default HomePage;
