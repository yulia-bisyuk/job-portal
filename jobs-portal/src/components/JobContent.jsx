import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import JobActions from './JobActions';
import sprite from '../assets/sprite.svg';
import { layout, styles } from '../styles';
import { scrollToTop } from '../helpers';

const JobDetailsContent = ({ name, company, date, info }) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <section className={` ${layout.section}`}>
      <h1
        className={`${styles.heading2} text-darkGreen bg-lightGreen text-center py-[20px]`}
      >
        {name}
      </h1>
      <div className='container  relative'>
        <JobActions />
        <div className='flex justify-start items-center mb-[20px]'>
          <p className='text-textLightGrey mr-[6px]'>
            Posted{' '}
            <span className={`${styles.paragraph} text-primaryGreen mx-[4px]`}>
              {date}
            </span>{' '}
            by{' '}
          </p>
          <h2 className={`${styles.heading4} text-darkGreen`}>{company}</h2>
        </div>
        <p
          className={`bg-[url('/public/images/apply-bg.svg')] bg-no-repeat bg-center bg-contain`}
        >
          {info}
        </p>

        <button
          type='button'
          onClick={() => {
            scrollToTop();
          }}
          className='p-[10px] bg-lightGreen rounded-full absolute bottom-0 right-0 bg-opacity-60'
        >
          <svg width='24' height='24' className='rotate-90'>
            <use href={sprite + '#icon-arrow-back'} />
          </svg>
        </button>

        {modalOpened && <Modal setModalOpened={setModalOpened} />}
      </div>
      <div className='bg-lightGreen py-[16px] mt-[30px]'>
        <button
          className={` font-medium ${styles.button} block mx-auto`}
          type='button'
          onClick={() => {
            setModalOpened(true);
          }}
        >
          Apply
        </button>
      </div>
    </section>
  );
};

JobDetailsContent.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string,
  info: PropTypes.object,
};

export default JobDetailsContent;
