import { layout, styles } from '../styles';
import JobListItem from './JobListItem';
import { jobs } from '../constants';
import sprite from '../assets/sprite.svg';

const JobList = () => {
  return (
    <section className={` ${layout.section}`}>
      <div className='container'>
        <h2 className={` text-darkGreen ${styles.heading2}`}>
          All Popular Listed jobs
        </h2>
        <ul className='md:grid md:grid-cols-2 md:gap-8 mb-[26px]'>
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </ul>
        <div>
          <p
            className={`text-textLightGrey text-center ${styles.paragraph} mb-[12px]`}
          >
            Showing <span className='font-semibold text-darkGreen '>1</span> to{' '}
            <span className='font-semibold text-darkGreen '>10</span> of{' '}
            <span className='font-semibold text-darkGreen '>100</span> Entries
          </p>
          <div className=' w-fit mx-auto'>
            <button type='button' className='mr-[12px]'>
              <svg width='30' height='30'>
                <use href={sprite + '#icon-arrow-left'} />
              </svg>
            </button>
            <button type='button'>
              <svg width='30' height='30'>
                <use href={sprite + '#icon-arrow-right'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
