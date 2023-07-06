import { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { JobDetailsContext } from '../App';
import axios from 'axios';
import Hero from '../components/Hero';
import JobList from '../components/JobList';
import Partners from '../components/Partners';
import PopularCategories from '../components/PopularCategories';
import Statistics from '../components/Statistics';
import { BASE_URL } from '../constants/index';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalJobsCount, setTotalJobsCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? 1;
  const [error, setError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  const { category } = useContext(JobDetailsContext);
  const categoryParam = category ? `category=${category}` : null;

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
          setError(false);
        } else {
          setDataError(true);
          setError(true);
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
      <Hero />
      <Partners />
      <PopularCategories />
      {isLoading && <div>Loading ...</div>}
      {error && <div>Oops... Something went wrong</div>}
      {dataError ? (
        <div>There is no data for your request. Please, try again!</div>
      ) : (
        <JobList
          jobs={jobs}
          setSearchParams={setSearchParams}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalJobsCount={totalJobsCount}
        />
      )}
      <Statistics />
    </>
  );
};

export default HomePage;
