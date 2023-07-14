import { useState, useEffect, useContext } from 'react';
import { JobDetailsContext } from '../App';
import parse from 'html-react-parser';
import axios from 'axios';
import { BASE_URL } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetailsContent from '../components/JobDetailsContent';

const JobDetailsPage = () => {
  const { jobId } = useContext(JobDetailsContext);
  console.log(`jobId in JobDetailsPage: `, jobId);

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

  console.log(`jobItem: `, jobItem);

  return (
    <div>
      <Header />
      {jobItem && (
        <JobDetailsContent
          name={jobItem.name}
          company={jobItem.company.name}
          date={jobItem.publication_date.slice(0, 10)}
          info={parse(jobItem.contents)}
        />
      )}

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
