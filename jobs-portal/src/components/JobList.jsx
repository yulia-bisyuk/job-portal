import { useState, forwardRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { layout, styles } from '../styles';
import PropTypes from 'prop-types';
import { scrollToView } from '../helpers';
import JobListItem from './JobListItem';
import DropdownButton from './DropdownButton';
import Modal from './Modal';
import { sortByDateOptions } from '../constants';
import sprite from '../assets/sprite.svg';

const JobList = forwardRef(function JobList(
  { jobs, currentPage, itemsPerPage, totalPages, totalJobsCount },
  ref
) {
  const [fromCount, setFromCount] = useState(1);
  const [toCount, setToCount] = useState(itemsPerPage);
  const [option, setOption] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(`modalOpened: `, modalOpened);

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
    setToCount(currentPage * itemsPerPage - itemsPerPage);
    scrollToView(ref);
  };

  const onNextClick = () => {
    if (+currentPage < totalPages) setSearchParams({ page: +currentPage + 1 });
    setToCount(currentPage * itemsPerPage + itemsPerPage);
    setFromCount(currentPage * itemsPerPage);
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
          {jobs &&
            jobs.map((job) => (
              <JobListItem
                key={job.id}
                job={job}
                setModalOpened={setModalOpened}
              />
            ))}
        </ul>
        {modalOpened && (
          <Modal
            setModalOpened={setModalOpened}
            title={'Apply for job of your dream!'}
          >
            <div>Modal Children</div>
          </Modal>
        )}
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
            <button
              onClick={onPrevClick}
              type='button'
              className='mr-[12px] disabled:opacity-50'
              disabled={+currentPage === 1}
            >
              <svg width='30' height='30' className='group-disabled:fill-grey'>
                <use href={sprite + '#icon-arrow-left'} />
              </svg>
            </button>
            <button
              onClick={onNextClick}
              type='button'
              disabled={totalJobsCount / +currentPage === 1}
            >
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
