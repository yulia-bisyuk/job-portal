import { useState } from 'react';
import { layout, styles } from '../styles';
import PropTypes from 'prop-types';
// import { scrollToTop } from '../helpers';
import JobListItem from './JobListItem';
// import { jobs } from '../constants';
import sprite from '../assets/sprite.svg';

const JobList = ({
  jobs,
  setSearchParams,
  currentPage,
  itemsPerPage,
  totalPages,
  totalJobsCount,
}) => {
  console.log(`currentPage: `, currentPage);

  const [fromCount, setFromCount] = useState(1);
  const [toCount, setToCount] = useState(20);

  // const fromCount = +currentPage === 1 ? 1 : itemsPerPage + 20;
  // const toCount = +currentPage === 1 ? 20 : itemsPerPage * +currentPage + 20;

  const onPrevClick = () => {
    if (+currentPage > 1) setSearchParams({ page: +currentPage - 1 });
    setFromCount((prevCount) => prevCount - itemsPerPage);
    setToCount((prevCount) => prevCount - itemsPerPage);
    // scrollToTop();
  };

  const onNextClick = () => {
    if (+currentPage < totalPages) setSearchParams({ page: +currentPage + 1 });
    setFromCount((prevCount) => prevCount + itemsPerPage);
    setToCount((prevCount) => prevCount + itemsPerPage);
    // scrollToTop();
  };

  return (
    <section className={` ${layout.section}`}>
      <div className='container'>
        <h2 className={` text-darkGreen ${styles.heading2}`}>
          All Popular Listed jobs
        </h2>
        <ul className='md:grid md:grid-cols-2 md:gap-8 mb-[26px]'>
          {jobs && jobs.map((job) => <JobListItem key={job.id} job={job} />)}
        </ul>
        <div>
          <p
            className={`text-textLightGrey text-center ${styles.paragraph} mb-[12px]`}
          >
            Showing{' '}
            <span className='font-semibold text-darkGreen '>{fromCount}</span>{' '}
            to <span className='font-semibold text-darkGreen '>{toCount}</span>{' '}
            of{' '}
            <span className='font-semibold text-darkGreen '>
              {totalJobsCount}
            </span>{' '}
            Jobs
          </p>
          <div className=' w-fit mx-auto'>
            <button onClick={onPrevClick} type='button' className='mr-[12px]'>
              <svg width='30' height='30'>
                <use href={sprite + '#icon-arrow-left'} />
              </svg>
            </button>
            <button onClick={onNextClick} type='button'>
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

JobList.propTypes = {
  jobs: PropTypes.array,
  setSearchParams: PropTypes.func,
  currentPage: PropTypes.string,
  totalPages: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalJobsCount: PropTypes.number,
};

export default JobList;
