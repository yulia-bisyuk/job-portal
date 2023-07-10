import { useState, forwardRef } from 'react';
import { layout, styles } from '../styles';
import PropTypes from 'prop-types';
import { scrollToView } from '../helpers';
import JobListItem from './JobListItem';
import DropdownButton from './DropdownButton';
import { sortByDateOptions } from '../constants';
import sprite from '../assets/sprite.svg';

const JobList = forwardRef(function JobList(
  {
    jobs,
    setSearchParams,
    currentPage,
    itemsPerPage,
    totalPages,
    totalJobsCount,
  },
  ref
) {
  const [fromCount, setFromCount] = useState(1);
  const [toCount, setToCount] = useState(itemsPerPage);
  const [option, setOption] = useState(null);

  console.log(`currentPage: `, typeof currentPage);

  jobs.sort((a, b) => {
    if (option === 'Show from Newer ones') {
      return new Date(b.publication_date) - new Date(a.publication_date);
    }
    if (option === 'Show from Older ones') {
      return new Date(a.publication_date) - new Date(b.publication_date);
    }
  });

  const onPrevClick = () => {
    if (+currentPage > 1) setSearchParams({ page: +currentPage - 1 });
    setFromCount((prevCount) => prevCount - itemsPerPage);
    setToCount((prevCount) => prevCount - itemsPerPage);
    scrollToView(ref);
  };

  const onNextClick = () => {
    if (+currentPage < totalPages) setSearchParams({ page: +currentPage + 1 });
    setFromCount((prevCount) => prevCount + itemsPerPage);
    setToCount((prevCount) => prevCount + itemsPerPage);

    scrollToView(ref);
  };

  return (
    <section className={` ${layout.section}`}>
      <div className='container'>
        <h2 className={` text-darkGreen ${styles.heading2}`}>
          All Popular Listed jobs
        </h2>
        <div className='mx-auto w-fit'>
          <DropdownButton
            text='Sort By Date Published'
            options={sortByDateOptions}
            style={{ animate: 'fadeIn', height: 'h-[90px]' }}
            onClick={(e) => {
              setOption(e.target.innerText);
            }}
          />
          <p className='text-[14px] font-normal text-center text-textLightGrey leading-6'>
            {option}
          </p>
        </div>
        <ul
          name='list'
          ref={ref}
          id='scrollTarget'
          className='md:grid md:grid-cols-2 md:gap-8 my-[26px]'
        >
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
});

JobList.propTypes = {
  jobs: PropTypes.array,
  setSearchParams: PropTypes.func,
  currentPage: PropTypes.string,
  totalPages: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalJobsCount: PropTypes.number,
};

export default JobList;
