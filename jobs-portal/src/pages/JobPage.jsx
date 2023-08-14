import { useState, useEffect, useContext } from 'react';
import { JobDetailsContext } from '../App';
import parse from 'html-react-parser';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { parseDate } from '../helpers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetailsContent from '../components/JobContent';
import Loader from '../components/Loader';
import Error from '../components/Error';

const JobPage = () => {
  const { jobId } = useContext(JobDetailsContext);

  const [jobItem, setJobItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    localStorage.setItem('id', jobId);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${jobId}`)
      .then((res) => {
        setJobItem(res.data);
      })
      .catch((err) => {
        setIsError(true);
        console.error('Error:', err);
      })
      .finally(() => setIsLoading(false));
  }, [jobId]);

  // if (jobItem) {
  //   console.log(`jobItemContents: `, typeof jobItem.contents);
  // }

  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      {isError && <Error />}
      {jobItem && (
        <JobDetailsContent
          name={jobItem.name}
          company={jobItem.company.name}
          date={parseDate(jobItem.publication_date)}
          info={parse(jobItem.contents)}
        />
      )}

      <Footer />
    </div>
  );
};

export default JobPage;
