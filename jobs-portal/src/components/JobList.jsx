import { layout } from '../styles';
import JobListItem from './JobListItem';
import { jobs } from '../constants';

const JobList = () => {
  return (
    <section className={` ${layout.section}`}>
      <div className='container'>
        <ul>
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobList;
